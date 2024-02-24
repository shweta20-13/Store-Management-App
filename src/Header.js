import './App.css';
export function Header(){
    return (
        <>
        <nav >
             <ul>
                    <li>
                       <a href="/">Home</a> 
                    </li>
                    <li>
                       <a href="/about">About</a> 
                    </li>
                    <li>
                       <a href="/add">AddProduct</a> 
                    </li>
                    <li>
                       <a href="/product">Product</a> 
                    </li>
                    <li>
                       <a href="/login">Login</a> 
                    </li>
                    <li>
                       <a href="/register">Register</a> 
                    </li>
                </ul>
        </nav>
        </>
    )
}