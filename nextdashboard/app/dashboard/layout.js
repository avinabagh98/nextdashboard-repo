import Navbar from '../ui/dashboard/navbar/navbar'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import styles from '../ui/dashboard/dasboard.module.css'


export default function dashboardLayout({ children }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <Sidebar />
                </div>


                <div className={styles.content}>
                    <Navbar />
                    {children}
                </div>
            </div>


        </>
    );
} 