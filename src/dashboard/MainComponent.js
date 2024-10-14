import React, { useState } from "react";
import {
    FaSearch,
   
} from "react-icons/fa";
import Sidebar from "../SideBar";
import chart from '../assets/img/Frame 37675.jpg'
import heart from '../assets/img/heart.png'
import img1 from '../assets/img/img-1.png';
import img2 from '../assets/img/img-2.png';
import img3 from '../assets/img/img-3.png'
import img4 from '../assets/img/img-4.png';
import img5 from '../assets/img/img-5.png';




const MainComponent = () => {

  return (
    <div>

        {/* <Sidebar /> */}

        <div className="main">
            <div className="top">
                <h4>My Portfoliosssssss</h4>
                <div className="find">
                    {/* Input field with search icon inside */}
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                        />
                    </div>

                    {/* Add button */}
                    <button className="add-btn">
                        {/* <FaPlus className="add-icon" /> */}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill="#000F29"/>
                        </svg>
                    </button>

                    {/* Notification icon with badge */}
                    <div className="notification-container">
                        {/* <FaBell className="notification-icon" /> */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13.18V10C17.9986 8.58312 17.4958 7.21247 16.5806 6.13077C15.6655 5.04908 14.3971 4.32615 13 4.09V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4.09C9.60294 4.32615 8.33452 5.04908 7.41939 6.13077C6.50425 7.21247 6.00144 8.58312 6 10V13.18C5.41645 13.3863 4.911 13.7681 4.55294 14.2729C4.19488 14.7778 4.00174 15.3811 4 16V18C4 18.2652 4.10536 18.5196 4.29289 18.7071C4.48043 18.8946 4.73478 19 5 19H8.14C8.37028 19.8474 8.873 20.5954 9.5706 21.1287C10.2682 21.6621 11.1219 21.951 12 21.951C12.8781 21.951 13.7318 21.6621 14.4294 21.1287C15.127 20.5954 15.6297 19.8474 15.86 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18V16C19.9983 15.3811 19.8051 14.7778 19.4471 14.2729C19.089 13.7681 18.5835 13.3863 18 13.18ZM8 10C8 8.93913 8.42143 7.92172 9.17157 7.17157C9.92172 6.42143 10.9391 6 12 6C13.0609 6 14.0783 6.42143 14.8284 7.17157C15.5786 7.92172 16 8.93913 16 10V15H12H8V10ZM12 20C11.651 19.9979 11.3086 19.9045 11.0068 19.7291C10.7051 19.5536 10.4545 19.3023 10.28 19H13.72C13.5455 19.3023 13.2949 19.5536 12.9932 19.7291C12.6914 19.9045 12.349 19.9979 12 20ZM18 17H6V16C6 15.7348 6.10536 15.4804 6.29289 15.2929C6.48043 15.1054 6.73478 15 7 15H12H17C17.2652 15 17.5196 15.1054 17.7071 15.2929C17.8946 15.4804 18 15.7348 18 16V17Z" fill="#3B3B45"/>
                        </svg>
                        <span className="notification-badge"></span>
                    </div>
                </div>
                
            </div>
            <div className="main-content">
                <div className="overview">
                    <div className="count">
                        <div className="count-item">
                            <div className="count-progress">
                                <h2>51</h2>
                                <p>Total Channels</p>
                            </div>
                            <div className="progress" style={{ backgroundColor: "#E0FAF5" }}>
                                <svg width="12.66" height="12.66" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5001 1.66668C11.1359 1.66778 9.81528 2.14694 8.76781 3.02085C7.72034 3.89476 7.01227 5.10814 6.76672 6.45001C6.04875 6.83736 5.43646 7.39451 4.98326 8.07284C4.53007 8.75118 4.24974 9.53011 4.16672 10.3417C3.54651 10.6145 3.00219 11.0344 2.58093 11.5651C2.15967 12.0958 1.87418 12.7212 1.74922 13.3872C1.62425 14.0531 1.66357 14.7395 1.86377 15.3868C2.06397 16.0341 2.41901 16.6228 2.89812 17.1019C3.37723 17.5811 3.96596 17.9361 4.61327 18.1363C5.26058 18.3365 5.94695 18.3758 6.61288 18.2509C7.27882 18.1259 7.90424 17.8404 8.43493 17.4191C8.96562 16.9979 9.38557 16.4536 9.65839 15.8333C10.4676 15.7529 11.2449 15.4764 11.923 15.0277C12.6012 14.579 13.1597 13.9717 13.5501 13.2583C15.0092 13.0243 16.325 12.2452 17.2319 11.0784C18.1387 9.91161 18.569 8.44413 18.4357 6.97241C18.3023 5.50068 17.6154 4.1344 16.5137 3.14956C15.4119 2.16473 13.9775 1.63475 12.5001 1.66668ZM8.33339 14.525C8.33339 14.6083 8.33339 14.6917 8.27506 14.7833C8.16742 15.2123 7.94793 15.6049 7.639 15.9214C7.33006 16.2378 6.94272 16.4666 6.5165 16.5844C6.09027 16.7023 5.64042 16.7049 5.21282 16.5922C4.78522 16.4794 4.39517 16.2553 4.08248 15.9426C3.76979 15.6299 3.54563 15.2399 3.43288 14.8123C3.32012 14.3847 3.32281 13.9348 3.44066 13.5086C3.55851 13.0823 3.78731 12.695 4.10371 12.3861C4.42012 12.0771 4.81281 11.8577 5.24172 11.75L5.47506 11.6667C5.86637 11.5936 6.26961 11.6169 6.64988 11.7347C7.03015 11.8524 7.37599 12.0611 7.65749 12.3426C7.93898 12.6241 8.14764 12.9699 8.26541 13.3502C8.38318 13.7305 8.40651 14.1337 8.33339 14.525ZM12.5001 11.4667C12.4891 11.5202 12.4752 11.573 12.4584 11.625C12.4226 11.7784 12.3752 11.9288 12.3167 12.075C12.1249 12.5615 11.8212 12.996 11.4304 13.3435C11.0395 13.6909 10.5724 13.9415 10.0667 14.075C10.0667 13.925 10.0667 13.7833 10.0167 13.6333C9.96672 13.4833 10.0167 13.4083 10.0167 13.3C10.0167 13.1917 9.91672 12.9833 9.86672 12.825C9.81672 12.6667 9.80839 12.625 9.76672 12.525C9.69489 12.3662 9.61132 12.213 9.51672 12.0667C9.51672 11.9917 9.44172 11.9083 9.39172 11.8333C9.2435 11.6161 9.07617 11.4125 8.89172 11.225L8.72506 11.0833C8.58537 10.9549 8.43786 10.8352 8.28339 10.725C8.1926 10.6659 8.09794 10.613 8.00006 10.5667C7.86668 10.4819 7.72744 10.4067 7.58339 10.3417C7.47576 10.2956 7.36419 10.2594 7.25006 10.2333C7.10976 10.1764 6.96476 10.1318 6.81672 10.1C6.70006 10.1 6.57506 10.1 6.45006 10.05L5.94172 10C6.07438 9.49523 6.32371 9.02866 6.66964 8.63786C7.01557 8.24705 7.44844 7.94294 7.93339 7.75001C8.07632 7.69032 8.22408 7.64293 8.37506 7.60834L8.54172 7.56668C8.74728 7.52345 8.95668 7.50111 9.16672 7.50001C10.0508 7.50001 10.8986 7.8512 11.5237 8.47632C12.1489 9.10144 12.5001 9.94929 12.5001 10.8333C12.4989 11.0461 12.4766 11.2583 12.4334 11.4667H12.5001ZM14.1667 11.3333C14.1667 11.1667 14.1667 11 14.1667 10.8333C14.1667 9.50726 13.6399 8.23549 12.7023 7.29781C11.7646 6.36013 10.4928 5.83334 9.16672 5.83334C9.00006 5.83334 8.83339 5.83334 8.66672 5.83334C8.94141 5.21547 9.36234 4.67373 9.89318 4.25488C10.424 3.83604 11.0488 3.55269 11.7137 3.42928C12.3785 3.30587 13.0633 3.34611 13.7091 3.54654C14.3549 3.74697 14.9422 4.10155 15.4204 4.57968C15.8985 5.05782 16.2531 5.64513 16.4535 6.29093C16.654 6.93672 16.6942 7.62159 16.5708 8.28642C16.4474 8.95124 16.164 9.57604 15.7452 10.1069C15.3263 10.6377 14.7846 11.0587 14.1667 11.3333Z" fill="#00D5AA"/>
                                </svg>

                            </div>
                        </div>
                        <div className="count-item">
                            <div className="count-progress">
                                <h2>125</h2>
                                <p>New Members</p>
                            </div>
                            <div className="progress" style={{ backgroundColor: "#EFF2FE" }}>
                            <svg width="12.66" height="12.66" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4998 8.74999H16.6665V7.91666C16.6665 7.69564 16.5787 7.48368 16.4224 7.3274C16.2661 7.17112 16.0542 7.08332 15.8332 7.08332C15.6122 7.08332 15.4002 7.17112 15.2439 7.3274C15.0876 7.48368 14.9998 7.69564 14.9998 7.91666V8.74999H14.1665C13.9455 8.74999 13.7335 8.83779 13.5772 8.99407C13.421 9.15035 13.3332 9.36231 13.3332 9.58332C13.3332 9.80434 13.421 10.0163 13.5772 10.1726C13.7335 10.3289 13.9455 10.4167 14.1665 10.4167H14.9998V11.25C14.9998 11.471 15.0876 11.683 15.2439 11.8392C15.4002 11.9955 15.6122 12.0833 15.8332 12.0833C16.0542 12.0833 16.2661 11.9955 16.4224 11.8392C16.5787 11.683 16.6665 11.471 16.6665 11.25V10.4167H17.4998C17.7209 10.4167 17.9328 10.3289 18.0891 10.1726C18.2454 10.0163 18.3332 9.80434 18.3332 9.58332C18.3332 9.36231 18.2454 9.15035 18.0891 8.99407C17.9328 8.83779 17.7209 8.74999 17.4998 8.74999ZM11.0832 10.1833C11.5278 9.79843 11.8845 9.32239 12.1289 8.78751C12.3733 8.25262 12.4998 7.67141 12.4998 7.08332C12.4998 5.97825 12.0609 4.91845 11.2794 4.13704C10.498 3.35564 9.43824 2.91666 8.33317 2.91666C7.2281 2.91666 6.16829 3.35564 5.38689 4.13704C4.60549 4.91845 4.1665 5.97825 4.1665 7.08332C4.1665 7.67141 4.29301 8.25262 4.53744 8.78751C4.78188 9.32239 5.13852 9.79843 5.58317 10.1833C4.41662 10.7116 3.42689 11.5646 2.73232 12.6404C2.03775 13.7163 1.66773 14.9694 1.6665 16.25C1.6665 16.471 1.7543 16.683 1.91058 16.8392C2.06686 16.9955 2.27882 17.0833 2.49984 17.0833C2.72085 17.0833 2.93281 16.9955 3.08909 16.8392C3.24537 16.683 3.33317 16.471 3.33317 16.25C3.33317 14.9239 3.85996 13.6521 4.79764 12.7145C5.73532 11.7768 7.00709 11.25 8.33317 11.25C9.65925 11.25 10.931 11.7768 11.8687 12.7145C12.8064 13.6521 13.3332 14.9239 13.3332 16.25C13.3332 16.471 13.421 16.683 13.5772 16.8392C13.7335 16.9955 13.9455 17.0833 14.1665 17.0833C14.3875 17.0833 14.5995 16.9955 14.7558 16.8392C14.912 16.683 14.9998 16.471 14.9998 16.25C14.9986 14.9694 14.6286 13.7163 13.934 12.6404C13.2395 11.5646 12.2497 10.7116 11.0832 10.1833ZM8.33317 9.58332C7.83872 9.58332 7.35537 9.4367 6.94425 9.162C6.53312 8.88729 6.21269 8.49685 6.02347 8.04003C5.83425 7.58322 5.78474 7.08055 5.88121 6.5956C5.97767 6.11065 6.21577 5.66519 6.5654 5.31556C6.91504 4.96593 7.36049 4.72782 7.84545 4.63136C8.3304 4.5349 8.83306 4.58441 9.28988 4.77362C9.74669 4.96284 10.1371 5.28327 10.4118 5.6944C10.6865 6.10552 10.8332 6.58887 10.8332 7.08332C10.8332 7.74636 10.5698 8.38225 10.1009 8.85109C9.6321 9.31993 8.99621 9.58332 8.33317 9.58332Z" fill="#7B91F7"/>
                            </svg>


                            </div>
                        </div>
                        <div className="count-item">
                            <div className="count-progress">
                                <h2>789</h2>
                                <p>All Impressions</p>
                            </div>
                            <div className="progress" style={{ backgroundColor: "#FFF0E0" }}>
                            <svg width="12.66" height="12.66" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2665 5.51667C18.1819 5.31304 18.0201 5.15123 17.8165 5.06667C17.7163 5.02397 17.6087 5.00132 17.4998 5H13.3331C13.1121 5 12.9001 5.0878 12.7439 5.24408C12.5876 5.40036 12.4998 5.61232 12.4998 5.83333C12.4998 6.05435 12.5876 6.26631 12.7439 6.42259C12.9001 6.57887 13.1121 6.66667 13.3331 6.66667H15.4915L10.8331 11.325L8.09145 8.575C8.01398 8.49689 7.92182 8.4349 7.82027 8.39259C7.71872 8.35028 7.6098 8.3285 7.49979 8.3285C7.38978 8.3285 7.28086 8.35028 7.17931 8.39259C7.07776 8.4349 6.98559 8.49689 6.90812 8.575L1.90812 13.575C1.83001 13.6525 1.76802 13.7446 1.72571 13.8462C1.6834 13.9477 1.66162 14.0567 1.66162 14.1667C1.66162 14.2767 1.6834 14.3856 1.72571 14.4871C1.76802 14.5887 1.83001 14.6809 1.90812 14.7583C1.98559 14.8364 2.07776 14.8984 2.17931 14.9407C2.28086 14.9831 2.38978 15.0048 2.49979 15.0048C2.6098 15.0048 2.71872 14.9831 2.82027 14.9407C2.92182 14.8984 3.01398 14.8364 3.09145 14.7583L7.49979 10.3417L10.2415 13.0917C10.3189 13.1698 10.4111 13.2318 10.5126 13.2741C10.6142 13.3164 10.7231 13.3382 10.8331 13.3382C10.9431 13.3382 11.0521 13.3164 11.1536 13.2741C11.2551 13.2318 11.3473 13.1698 11.4248 13.0917L16.6665 7.84167V10C16.6665 10.221 16.7543 10.433 16.9105 10.5893C17.0668 10.7455 17.2788 10.8333 17.4998 10.8333C17.7208 10.8333 17.9328 10.7455 18.089 10.5893C18.2453 10.433 18.3331 10.221 18.3331 10V5.83333C18.3318 5.72444 18.3092 5.61685 18.2665 5.51667Z" fill="#FF8600"/>
                            </svg>


                            </div>
                        </div>
                    </div>


                    <div className="chart">
                        <div className="chart-nav">
                            <h3>Overview</h3>
                            <div>
                                <button style={{ backgroundColor: "#FF8600", color: '#fff' }} className="chart-btn">Robbin Hood</button>
                                <button className="chart-btn">Amreitrade</button>
                                <button className="chart-btn">Fidelity</button>
                                <button className="chart-btn">Charles</button>

                            </div>

                        </div>

                        <img src={chart} alt={chart} />


                    </div>

                    <div className="trending">
                        <h2>Trending Posts</h2>
                        <div className="trending-container">
                            <div className="trending-posts">
                                <div className="trending-content">
                                    <h3>8 Upcoming Influencer Marketing Trends and Benefits</h3>
                                    <p>Marketing is evolving. It's changing from a one-way street to a two-way conversa…</p>
                                </div>

                                <div style={{ width:'218px', display: 'flex' }}>
                                    <div className="trending-rating" >
                                        <svg
                                        width="16"
                                        height="17"
                                        viewBox="0 0 24 24"
                                        fill="red" // You can change the color here
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                        <p>260</p>
                                    </div>

                                    <div className="trending-rating">
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_258)">
                                        <path d="M15 4.59207V11.344C15 12.4974 14.0749 13.4361 12.9378 13.4361H6.39514L2.0549 16.5V13.4361C0.921112 13.4322 0 12.4951 0 11.344V4.59207C0 3.43853 0.92514 2.5 2.06223 2.5H12.9378C14.0749 2.5 15 3.43853 15 4.59207Z" fill="#FFB800"/>
                                        <path d="M16 4.6043V11.3957C16 12.5559 15.0135 13.5 13.801 13.5H8V2.5H13.801C15.0135 2.5 16 3.44402 16 4.6043Z" fill="#FF8600"/>
                                        <path d="M5 5.5H12V6.5H5V5.5Z" fill="white"/>
                                        <path d="M5 7.5H12V8.5H5V7.5Z" fill="white"/>
                                        <path d="M5 9.5H12V10.5H5V9.5Z" fill="white"/>
                                        <path d="M8 5.5H11V6.5H8V5.5Z" fill="#E1E1E3"/>
                                        <path d="M8 7.5H11V8.5H8V7.5Z" fill="#E1E1E3"/>
                                        <path d="M8 8.5H11V9.5H8V8.5Z" fill="#E1E1E3"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1_258">
                                        <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>

                                        <p style={{ margin: '0', fontSize: '14px' }}>260</p>
                                    </div>

                                    <div className="trending-rating">
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_270)">
                                        <path d="M16 6.49746L8.75 0.5V4.16468C6.57562 4.27346 4.59781 5.13524 3.07469 6.49746C1.18844 8.18414 0 10.6376 0 13.3751V16.5H0.9375C0.9375 12.2774 4.37219 8.84181 8.59375 8.84181H8.75V12.4949L16 6.49746Z" fill="#FF641A"/>
                                        <path d="M8.75 12.4959V8.84375H8.59375C4.37219 8.84375 0.9375 12.2784 0.9375 16.5H0V13.3759C0 10.6391 1.18844 8.18625 3.07469 6.5H16L8.75 12.4959Z" fill="#F03800"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1_270">
                                        <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>

                                        <p  style={{ margin: '0', fontSize: '14px' }}>123</p>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="trending-posts">
                                <div className="trending-content">
                                    <h3>How Influencer Marketing Affects Consumer Buying Behavior</h3>
                                    <p>As influencer marketing continues to grow, consumers have been turning to their…</p>
                                </div>

                                <div style={{ width:'218px', display: 'flex' }}>
                                    <div className="trending-rating" >
                                        <svg
                                        width="16"
                                        height="17"
                                        viewBox="0 0 24 24"
                                        fill="red" // You can change the color here
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                        <p>260</p>
                                    </div>

                                    <div className="trending-rating">
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_258)">
                                        <path d="M15 4.59207V11.344C15 12.4974 14.0749 13.4361 12.9378 13.4361H6.39514L2.0549 16.5V13.4361C0.921112 13.4322 0 12.4951 0 11.344V4.59207C0 3.43853 0.92514 2.5 2.06223 2.5H12.9378C14.0749 2.5 15 3.43853 15 4.59207Z" fill="#FFB800"/>
                                        <path d="M16 4.6043V11.3957C16 12.5559 15.0135 13.5 13.801 13.5H8V2.5H13.801C15.0135 2.5 16 3.44402 16 4.6043Z" fill="#FF8600"/>
                                        <path d="M5 5.5H12V6.5H5V5.5Z" fill="white"/>
                                        <path d="M5 7.5H12V8.5H5V7.5Z" fill="white"/>
                                        <path d="M5 9.5H12V10.5H5V9.5Z" fill="white"/>
                                        <path d="M8 5.5H11V6.5H8V5.5Z" fill="#E1E1E3"/>
                                        <path d="M8 7.5H11V8.5H8V7.5Z" fill="#E1E1E3"/>
                                        <path d="M8 8.5H11V9.5H8V8.5Z" fill="#E1E1E3"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1_258">
                                        <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>

                                        <p style={{ margin: '0', fontSize: '14px' }}>260</p>
                                    </div>

                                    <div className="trending-rating">
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_270)">
                                        <path d="M16 6.49746L8.75 0.5V4.16468C6.57562 4.27346 4.59781 5.13524 3.07469 6.49746C1.18844 8.18414 0 10.6376 0 13.3751V16.5H0.9375C0.9375 12.2774 4.37219 8.84181 8.59375 8.84181H8.75V12.4949L16 6.49746Z" fill="#FF641A"/>
                                        <path d="M8.75 12.4959V8.84375H8.59375C4.37219 8.84375 0.9375 12.2784 0.9375 16.5H0V13.3759C0 10.6391 1.18844 8.18625 3.07469 6.5H16L8.75 12.4959Z" fill="#F03800"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1_270">
                                        <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>

                                        <p  style={{ margin: '0', fontSize: '14px' }}>123</p>
                                    </div>
                                </div>

                                
                            </div>
                        </div>

                        

                    </div>

                    <div className="members">
                        <h2>Potential Members</h2>
                        <div className="members-container">
                            <div className="members-posts">
                                <div className="members-content">
                                    <img
                                        src={img1}
                                        alt="Jossy"
                                        className="profile-picture"
                                    />
                                    <div style={{ textAlign: 'center', margin: '8px 0px 12px 0'}}>
                                        <h3 style={{ margin: '0', fontSize: '14px', fontFamily: 'lexend', fontWeight: '600', color: '#3B3B45'}}>Wanda Parker</h3>
                                        <p style={{ margin: '0', fontSize: '11px', fontFamily: 'lexend', fontWeight: '400', color: '#818187' }}>@ashking1234</p>

                                    </div>
                                    <div className="members-rating">
                                        <svg width="16" height="17" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.7667 5.51667C18.6821 5.31304 18.5203 5.15123 18.3167 5.06667C18.2165 5.02397 18.1089 5.00132 18 5H13.8334C13.6124 5 13.4004 5.0878 13.2441 5.24408C13.0878 5.40036 13 5.61232 13 5.83333C13 6.05435 13.0878 6.26631 13.2441 6.42259C13.4004 6.57887 13.6124 6.66667 13.8334 6.66667H15.9917L11.3334 11.325L8.5917 8.575C8.51423 8.49689 8.42206 8.4349 8.32051 8.39259C8.21896 8.35028 8.11004 8.3285 8.00003 8.3285C7.89002 8.3285 7.7811 8.35028 7.67955 8.39259C7.578 8.4349 7.48583 8.49689 7.40836 8.575L2.40836 13.575C2.33026 13.6525 2.26826 13.7446 2.22595 13.8462C2.18365 13.9477 2.16187 14.0567 2.16187 14.1667C2.16187 14.2767 2.18365 14.3856 2.22595 14.4871C2.26826 14.5887 2.33026 14.6809 2.40836 14.7583C2.48583 14.8364 2.578 14.8984 2.67955 14.9407C2.7811 14.9831 2.89002 15.0048 3.00003 15.0048C3.11004 15.0048 3.21896 14.9831 3.32051 14.9407C3.42206 14.8984 3.51423 14.8364 3.5917 14.7583L8.00003 10.3417L10.7417 13.0917C10.8192 13.1698 10.9113 13.2318 11.0129 13.2741C11.1144 13.3164 11.2234 13.3382 11.3334 13.3382C11.4434 13.3382 11.5523 13.3164 11.6538 13.2741C11.7554 13.2318 11.8476 13.1698 11.925 13.0917L17.1667 7.84167V10C17.1667 10.221 17.2545 10.433 17.4108 10.5893C17.5671 10.7455 17.779 10.8333 18 10.8333C18.221 10.8333 18.433 10.7455 18.5893 10.5893C18.7456 10.433 18.8334 10.221 18.8334 10V5.83333C18.832 5.72444 18.8094 5.61685 18.7667 5.51667Z" fill="#35DB95"/>
                                        </svg>


                                        <p style={{ margin: '0 0 0 10px', fontSize: '14px', fontFamily: 'lexend', fontWeight: '700', color: '#3B3B45' }}>10.3%</p>
                                    </div>

                                </div>

                                
                            </div>
                            <div className="members-posts">
                                <div className="members-content">
                                    <img
                                        src={img2}
                                        alt="Jossy"
                                        className="profile-picture"
                                    />
                                    <div style={{ textAlign: 'center', margin: '8px 0px 12px 0'}}>
                                        <h3 style={{ margin: '0', fontSize: '14px', fontFamily: 'lexend', fontWeight: '600', color: '#3B3B45'}}>Terry Brown</h3>
                                        <p style={{ margin: '0', fontSize: '11px', fontFamily: 'lexend', fontWeight: '400', color: '#818187' }}>@ashking1234</p>

                                    </div>
                                    <div className="members-rating">
                                        <svg width="16" height="17" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.7667 5.51667C18.6821 5.31304 18.5203 5.15123 18.3167 5.06667C18.2165 5.02397 18.1089 5.00132 18 5H13.8334C13.6124 5 13.4004 5.0878 13.2441 5.24408C13.0878 5.40036 13 5.61232 13 5.83333C13 6.05435 13.0878 6.26631 13.2441 6.42259C13.4004 6.57887 13.6124 6.66667 13.8334 6.66667H15.9917L11.3334 11.325L8.5917 8.575C8.51423 8.49689 8.42206 8.4349 8.32051 8.39259C8.21896 8.35028 8.11004 8.3285 8.00003 8.3285C7.89002 8.3285 7.7811 8.35028 7.67955 8.39259C7.578 8.4349 7.48583 8.49689 7.40836 8.575L2.40836 13.575C2.33026 13.6525 2.26826 13.7446 2.22595 13.8462C2.18365 13.9477 2.16187 14.0567 2.16187 14.1667C2.16187 14.2767 2.18365 14.3856 2.22595 14.4871C2.26826 14.5887 2.33026 14.6809 2.40836 14.7583C2.48583 14.8364 2.578 14.8984 2.67955 14.9407C2.7811 14.9831 2.89002 15.0048 3.00003 15.0048C3.11004 15.0048 3.21896 14.9831 3.32051 14.9407C3.42206 14.8984 3.51423 14.8364 3.5917 14.7583L8.00003 10.3417L10.7417 13.0917C10.8192 13.1698 10.9113 13.2318 11.0129 13.2741C11.1144 13.3164 11.2234 13.3382 11.3334 13.3382C11.4434 13.3382 11.5523 13.3164 11.6538 13.2741C11.7554 13.2318 11.8476 13.1698 11.925 13.0917L17.1667 7.84167V10C17.1667 10.221 17.2545 10.433 17.4108 10.5893C17.5671 10.7455 17.779 10.8333 18 10.8333C18.221 10.8333 18.433 10.7455 18.5893 10.5893C18.7456 10.433 18.8334 10.221 18.8334 10V5.83333C18.832 5.72444 18.8094 5.61685 18.7667 5.51667Z" fill="#35DB95"/>
                                        </svg>


                                        <p style={{ margin: '0 0 0 10px', fontSize: '14px', fontFamily: 'lexend', fontWeight: '700', color: '#3B3B45' }}>9.8%</p>
                                    </div>

                                </div>

                                
                            </div>
                            <div className="members-posts">
                                <div className="members-content">
                                    <img
                                        src={img3}
                                        alt="Jossy"
                                        className="profile-picture"
                                    />
                                    <div style={{ textAlign: 'center', margin: '8px 0px 12px 0'}}>
                                        <h3 style={{ margin: '0', fontSize: '14px', fontFamily: 'lexend', fontWeight: '600', color: '#3B3B45'}}>Lucas Holmes</h3>
                                        <p style={{ margin: '0', fontSize: '11px', fontFamily: 'lexend', fontWeight: '400', color: '#818187' }}>@ashking1234</p>

                                    </div>
                                    <div className="members-rating">
                                        <svg width="16" height="17" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.7667 5.51667C18.6821 5.31304 18.5203 5.15123 18.3167 5.06667C18.2165 5.02397 18.1089 5.00132 18 5H13.8334C13.6124 5 13.4004 5.0878 13.2441 5.24408C13.0878 5.40036 13 5.61232 13 5.83333C13 6.05435 13.0878 6.26631 13.2441 6.42259C13.4004 6.57887 13.6124 6.66667 13.8334 6.66667H15.9917L11.3334 11.325L8.5917 8.575C8.51423 8.49689 8.42206 8.4349 8.32051 8.39259C8.21896 8.35028 8.11004 8.3285 8.00003 8.3285C7.89002 8.3285 7.7811 8.35028 7.67955 8.39259C7.578 8.4349 7.48583 8.49689 7.40836 8.575L2.40836 13.575C2.33026 13.6525 2.26826 13.7446 2.22595 13.8462C2.18365 13.9477 2.16187 14.0567 2.16187 14.1667C2.16187 14.2767 2.18365 14.3856 2.22595 14.4871C2.26826 14.5887 2.33026 14.6809 2.40836 14.7583C2.48583 14.8364 2.578 14.8984 2.67955 14.9407C2.7811 14.9831 2.89002 15.0048 3.00003 15.0048C3.11004 15.0048 3.21896 14.9831 3.32051 14.9407C3.42206 14.8984 3.51423 14.8364 3.5917 14.7583L8.00003 10.3417L10.7417 13.0917C10.8192 13.1698 10.9113 13.2318 11.0129 13.2741C11.1144 13.3164 11.2234 13.3382 11.3334 13.3382C11.4434 13.3382 11.5523 13.3164 11.6538 13.2741C11.7554 13.2318 11.8476 13.1698 11.925 13.0917L17.1667 7.84167V10C17.1667 10.221 17.2545 10.433 17.4108 10.5893C17.5671 10.7455 17.779 10.8333 18 10.8333C18.221 10.8333 18.433 10.7455 18.5893 10.5893C18.7456 10.433 18.8334 10.221 18.8334 10V5.83333C18.832 5.72444 18.8094 5.61685 18.7667 5.51667Z" fill="#35DB95"/>
                                        </svg>


                                        <p style={{ margin: '0 0 0 10px', fontSize: '14px', fontFamily: 'lexend', fontWeight: '700', color: '#3B3B45' }}>6.5%</p>
                                    </div>

                                </div>

                                
                            </div>
                            <div className="members-posts">
                                <div className="members-content">
                                    <img
                                        src={img4}
                                        alt="Jossy"
                                        className="profile-picture"
                                    />
                                    <div style={{ textAlign: 'center', margin: '8px 0px 12px 0'}}>
                                        <h3 style={{ margin: '0', fontSize: '14px', fontFamily: 'lexend', fontWeight: '600', color: '#3B3B45'}}>Janice Miller</h3>
                                        <p style={{ margin: '0', fontSize: '11px', fontFamily: 'lexend', fontWeight: '400', color: '#818187' }}>@ashking1234</p>

                                    </div>
                                    <div className="members-rating">
                                        <svg width="16" height="17" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.7667 5.51667C18.6821 5.31304 18.5203 5.15123 18.3167 5.06667C18.2165 5.02397 18.1089 5.00132 18 5H13.8334C13.6124 5 13.4004 5.0878 13.2441 5.24408C13.0878 5.40036 13 5.61232 13 5.83333C13 6.05435 13.0878 6.26631 13.2441 6.42259C13.4004 6.57887 13.6124 6.66667 13.8334 6.66667H15.9917L11.3334 11.325L8.5917 8.575C8.51423 8.49689 8.42206 8.4349 8.32051 8.39259C8.21896 8.35028 8.11004 8.3285 8.00003 8.3285C7.89002 8.3285 7.7811 8.35028 7.67955 8.39259C7.578 8.4349 7.48583 8.49689 7.40836 8.575L2.40836 13.575C2.33026 13.6525 2.26826 13.7446 2.22595 13.8462C2.18365 13.9477 2.16187 14.0567 2.16187 14.1667C2.16187 14.2767 2.18365 14.3856 2.22595 14.4871C2.26826 14.5887 2.33026 14.6809 2.40836 14.7583C2.48583 14.8364 2.578 14.8984 2.67955 14.9407C2.7811 14.9831 2.89002 15.0048 3.00003 15.0048C3.11004 15.0048 3.21896 14.9831 3.32051 14.9407C3.42206 14.8984 3.51423 14.8364 3.5917 14.7583L8.00003 10.3417L10.7417 13.0917C10.8192 13.1698 10.9113 13.2318 11.0129 13.2741C11.1144 13.3164 11.2234 13.3382 11.3334 13.3382C11.4434 13.3382 11.5523 13.3164 11.6538 13.2741C11.7554 13.2318 11.8476 13.1698 11.925 13.0917L17.1667 7.84167V10C17.1667 10.221 17.2545 10.433 17.4108 10.5893C17.5671 10.7455 17.779 10.8333 18 10.8333C18.221 10.8333 18.433 10.7455 18.5893 10.5893C18.7456 10.433 18.8334 10.221 18.8334 10V5.83333C18.832 5.72444 18.8094 5.61685 18.7667 5.51667Z" fill="#35DB95"/>
                                        </svg>


                                        <p style={{ margin: '0 0 0 10px', fontSize: '14px', fontFamily: 'lexend', fontWeight: '700', color: '#3B3B45' }}>8.6%</p>
                                    </div>

                                </div>

                                
                            </div>
                            <div className="members-posts">
                                <div className="members-content">
                                    <img
                                        src={img5}
                                        alt="Jossy"
                                        className="profile-picture"
                                    />
                                    <div style={{ textAlign: 'center', margin: '8px 0px 12px 0'}}>
                                        <h3 style={{ margin: '0', fontSize: '14px', fontFamily: 'lexend', fontWeight: '600', color: '#3B3B45'}}>Terry Brown</h3>
                                        <p style={{ margin: '0', fontSize: '11px', fontFamily: 'lexend', fontWeight: '400', color: '#818187' }}>@ashking1234</p>

                                    </div>
                                    <div className="members-rating">
                                        <svg width="16" height="17" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.7667 5.51667C18.6821 5.31304 18.5203 5.15123 18.3167 5.06667C18.2165 5.02397 18.1089 5.00132 18 5H13.8334C13.6124 5 13.4004 5.0878 13.2441 5.24408C13.0878 5.40036 13 5.61232 13 5.83333C13 6.05435 13.0878 6.26631 13.2441 6.42259C13.4004 6.57887 13.6124 6.66667 13.8334 6.66667H15.9917L11.3334 11.325L8.5917 8.575C8.51423 8.49689 8.42206 8.4349 8.32051 8.39259C8.21896 8.35028 8.11004 8.3285 8.00003 8.3285C7.89002 8.3285 7.7811 8.35028 7.67955 8.39259C7.578 8.4349 7.48583 8.49689 7.40836 8.575L2.40836 13.575C2.33026 13.6525 2.26826 13.7446 2.22595 13.8462C2.18365 13.9477 2.16187 14.0567 2.16187 14.1667C2.16187 14.2767 2.18365 14.3856 2.22595 14.4871C2.26826 14.5887 2.33026 14.6809 2.40836 14.7583C2.48583 14.8364 2.578 14.8984 2.67955 14.9407C2.7811 14.9831 2.89002 15.0048 3.00003 15.0048C3.11004 15.0048 3.21896 14.9831 3.32051 14.9407C3.42206 14.8984 3.51423 14.8364 3.5917 14.7583L8.00003 10.3417L10.7417 13.0917C10.8192 13.1698 10.9113 13.2318 11.0129 13.2741C11.1144 13.3164 11.2234 13.3382 11.3334 13.3382C11.4434 13.3382 11.5523 13.3164 11.6538 13.2741C11.7554 13.2318 11.8476 13.1698 11.925 13.0917L17.1667 7.84167V10C17.1667 10.221 17.2545 10.433 17.4108 10.5893C17.5671 10.7455 17.779 10.8333 18 10.8333C18.221 10.8333 18.433 10.7455 18.5893 10.5893C18.7456 10.433 18.8334 10.221 18.8334 10V5.83333C18.832 5.72444 18.8094 5.61685 18.7667 5.51667Z" fill="#35DB95"/>
                                        </svg>


                                        <p style={{ margin: '0 0 0 10px', fontSize: '14px', fontFamily: 'lexend', fontWeight: '700', color: '#3B3B45' }}>9.8%</p>
                                    </div>

                                </div>

                                
                            </div>

                        </div>

                        

                    </div>

                    {/* <div className="members">

                    </div> */}

                </div>
                <div className="watchlist">

                </div>
                
            </div>                            
        </div>
    </div>

    
  );
};

export default MainComponent;
