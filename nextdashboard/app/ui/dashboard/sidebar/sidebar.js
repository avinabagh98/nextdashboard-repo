import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../sidebar/sidebar.module.css';
import { faSquare, faUser, faStar, faReceipt } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const menuItems = [
    {
        title: 'Pages',
        list: [
            {
                title: "Dashboard",
                path: '/dashboard',
                icon: <FontAwesomeIcon icon={faSquare} />
            },
            {
                title: "Users",
                path: '/dashboard/user',
                icon: <FontAwesomeIcon icon={faUser} />
            },
            {
                title: "Products",
                path: '/dashboard/products',
                icon: <FontAwesomeIcon icon={faStar} />
            },
            {
                title: "Trancsactions",
                path: '/dashboard/transactions',
                icon: <FontAwesomeIcon icon={faReceipt} />
            }
        ]
    },
    {
        title: 'Analytics',
        list: [
            {
                title: "Revenue",
                path: '/dashboard/revenue',
                icon: <FontAwesomeIcon icon={faSquare} />
            },
            {
                title: "Reports",
                path: '/dashboard/reports',
                icon: <FontAwesomeIcon icon={faUser} />
            },
            {
                title: "Teams",
                path: '/dashboard/teams',
                icon: <FontAwesomeIcon icon={faStar} />
            },

        ]
    },

    {
        title: 'User',
        list: [
            {
                title: "Settings",
                path: '/dashboard/settings',
                icon: <FontAwesomeIcon icon={faSquare} />
            },
            {
                title: "Help",
                path: '/dashboard/help',
                icon: <FontAwesomeIcon icon={faUser} />
            }
        ]
    }
]


export default function sidebar() {
    return (
        <>

            <div className={styles.container}>
                <div className={styles.profileContainer}>
                    <div className={styles.profilePic}>
                        <Image src="/Profile.png" alt="Profile picture" width={45} height={45} />
                    </div>
                    <div className={styles.userdetails}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.role}>Administrator</span>
                    </div>
                </div>
                <ul>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <div key={index} className={styles.menuLink}>
                                    <li className={styles.menuLinkTitle}>{item.title}</li>
                                    <div className={styles.menu}>
                                        {item.list.map((listItem, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={listItem.path}>
                                                        <span className={styles.icon}>{listItem.icon}</span>
                                                        <span className={styles.menuItemsTitle}>{listItem.title}</span>
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </div>

                                </div>
                            )
                        })
                    }
                </ul>


            </div>
        </>
    );
}