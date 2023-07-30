import 'app/globals.css';
import Nav from "../components/nav";

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <Nav />
                {children}
            </body>
        </html>
  )
}
