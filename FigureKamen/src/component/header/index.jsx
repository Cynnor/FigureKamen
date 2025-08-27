import "./index.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="https://sdmntpraustraliaeast.oaiusercontent.com/files/00000000-2c8c-61fa-95c5-4df90566d717/raw?se=2025-08-27T11%3A36%3A32Z&sp=r&sv=2024-08-04&sr=b&scid=110455c0-2568-53d0-842d-d48483286a6d&skoid=0da8417a-a4c3-4a19-9b05-b82cee9d8868&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-26T21%3A20%3A38Z&ske=2025-08-27T21%3A20%3A38Z&sks=b&skv=2024-08-04&sig=TNe7GtJpnorhY0Dmy5SWQnATbYZY7FiFs%2BPUgl8NrU8%3D"
          alt=""
        />
      </div>
      <div className="header__nav">
        <ul>
          <li>
            <link rel="stylesheet" href="" />
            Sản phẩm
          </li>
          <li>
            <link rel="stylesheet" href="" />
            Giới thiệu
          </li>
          <li>
            <link rel="stylesheet" href="" />
            Quản lý sản phẩm
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
