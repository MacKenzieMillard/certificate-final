import styles from "../../styles.css";


import React from "react";

function Footer() {
    return(
        <footer>
            <p>Copyright © 2021 All rights reserved.</p>
            <div className="footerLinks">
                <a href="#">Privacy Policy</a>
                |
                <a href="#">Terms of Use</a>
                |
                <a href="#">Legal</a>
            </div>
        </footer>
    );
}

export default Footer;