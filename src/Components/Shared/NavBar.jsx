import React from "react";

function Navbar(props) {
    return (
        <nav className="nv-merge">
            <ul className="nv-nav-merge">{props.children}</ul>
        </nav>
    );
}

export {Navbar}