function Topbar() {
    return (
        <div className="top-bar">
            <div className="container-top-bar">
                <div className="currency">
                    <span>Currency :</span>
                    <div className="select">
                        <select>
                            <option value="gbp">GBP</option>
                            <option value="euro">Euro</option>s
                            <option value="dollar">Dollar</option>
                        </select>
                    </div>
                </div>
                <div className="sign">
                    <a href="login.html">Register</a>
                    <a href="login.html">Sign In</a>
                    <a className="empty" href>Empty</a>
                </div>
            </div>
        </div>
    );
}

export default Topbar