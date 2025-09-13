import { createContext, useContext, useState, useEffect } from "react";

// Context Creation
const AuthContext = createContext();

// Constants
const USER_STORAGE_KEY = "figurekamen_user";
const API_DELAY = 1000; // Simulate API delay

// Demo User Accounts
const DEMO_ACCOUNTS = [
  {
    id: 1,
    email: "demo@figurekamen.com",
    password: "123456",
    firstName: "Nguyễn",
    lastName: "Văn A",
    phone: "0123456789",
    avatar: "👨‍💼",
    role: "customer",
  },
  {
    id: 2,
    email: "admin@figurekamen.com",
    password: "admin123",
    firstName: "Admin",
    lastName: "System",
    phone: "0987654321",
    avatar: "👨‍💻",
    role: "admin",
  },
];

// Helper Functions
const saveUserToStorage = (user) => {
  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  } catch (error) {
    console.error("Error saving user to localStorage:", error);
  }
};

const loadUserFromStorage = () => {
  try {
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);
    return savedUser ? JSON.parse(savedUser) : null;
  } catch (error) {
    console.error("Error loading user from localStorage:", error);
    return null;
  }
};

const removeUserFromStorage = () => {
  try {
    localStorage.removeItem(USER_STORAGE_KEY);
  } catch (error) {
    console.error("Error removing user from localStorage:", error);
  }
};

const validateCredentials = (email, password) => {
  return DEMO_ACCOUNTS.find(
    (account) => account.email === email && account.password === password
  );
};

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize user from localStorage
  useEffect(() => {
    const savedUser = loadUserFromStorage();
    if (savedUser) {
      setUser(savedUser);
    }
    setIsInitialized(true);
  }, []);

  // Login Function
  const login = async (email, password) => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, API_DELAY));

      const foundUser = validateCredentials(email, password);

      if (foundUser) {
        // Remove password from user object for security
        const { password: _, ...userWithoutPassword } = foundUser;

        setUser(userWithoutPassword);
        saveUserToStorage(userWithoutPassword);

        return { success: true, user: userWithoutPassword };
      } else {
        return {
          success: false,
          message: "Email hoặc mật khẩu không đúng",
        };
      }
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        message: "Đã xảy ra lỗi. Vui lòng thử lại.",
      };
    } finally {
      setIsLoading(false);
    }
  };

  // Logout Function
  const logout = () => {
    setUser(null);
    removeUserFromStorage();
  };

  // Register Function (for future use)
  const register = async (userData) => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, API_DELAY));

      // Check if email already exists
      const existingUser = DEMO_ACCOUNTS.find(
        (account) => account.email === userData.email
      );

      if (existingUser) {
        return {
          success: false,
          message: "Email đã được sử dụng",
        };
      }

      // In a real app, this would call the API
      return {
        success: false,
        message: "Chức năng đăng ký sẽ có trong phiên bản tương lai",
      };
    } catch (error) {
      console.error("Register error:", error);
      return {
        success: false,
        message: "Đã xảy ra lỗi. Vui lòng thử lại.",
      };
    } finally {
      setIsLoading(false);
    }
  };

  // Computed Values
  const isAuthenticated = () => user !== null;
  const isAdmin = () => user?.role === "admin";
  const getFullName = () => (user ? `${user.firstName} ${user.lastName}` : "");

  // Context Value
  const value = {
    user,
    isLoading,
    isInitialized,
    login,
    logout,
    register,
    isAuthenticated,
    isAdmin,
    getFullName,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom Hook
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
