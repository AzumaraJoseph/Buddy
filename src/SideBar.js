import React from "react";
import { FaSignOutAlt } from "react-icons/fa"; // Icons from FontAwesome
import imgLogout from './assets/img/img-logout.png'; // Import the image
import logo from './assets/img/logo.png'


const Sidebar = () => {
    const user = {
        profilePicture: "/path/to/profile.jpg",
        fullName: "Theresa Milly",
        img: imgLogout,  // Use the imported image
    };

  return (
    <div className="sidebar">
        <div>
        <img src={logo} alt={logo} width={120} height={36} className="logo" />

      {/* Navigation Items */}
      <ul className="sidebar-menu">
        <li className="sidebar-item">
            <div className="sidebar-item-style">
                <svg width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7824 10.0325C12.5177 9.454 13.0544 8.66069 13.3178 7.76296C13.5812 6.86522 13.5583 5.9077 13.2522 5.0236C12.9461 4.1395 12.3721 3.3728 11.6099 2.83014C10.8478 2.28749 9.93546 1.99588 8.99988 1.99588C8.06429 1.99588 7.15196 2.28749 6.38982 2.83014C5.62768 3.3728 5.05363 4.1395 4.74753 5.0236C4.44144 5.9077 4.41851 6.86522 4.68195 7.76296C4.94538 8.66069 5.48208 9.454 6.21738 10.0325C4.95743 10.5373 3.85809 11.3745 3.03654 12.4549C2.215 13.5354 1.70205 14.8185 1.55238 16.1675C1.54154 16.266 1.55021 16.3657 1.57789 16.4608C1.60558 16.5559 1.65173 16.6447 1.71371 16.722C1.83889 16.8781 2.02096 16.9781 2.21988 17C2.41879 17.0219 2.61825 16.9638 2.77437 16.8387C2.93049 16.7135 3.0305 16.5314 3.05238 16.3325C3.21706 14.8664 3.91614 13.5124 5.01604 12.5291C6.11594 11.5458 7.53955 11.0023 9.01488 11.0023C10.4902 11.0023 11.9138 11.5458 13.0137 12.5291C14.1136 13.5124 14.8127 14.8664 14.9774 16.3325C14.9978 16.5168 15.0857 16.687 15.2242 16.8103C15.3627 16.9335 15.542 17.0011 15.7274 17H15.8099C16.0065 16.9774 16.1862 16.878 16.3098 16.7234C16.4334 16.5689 16.491 16.3718 16.4699 16.175C16.3195 14.8222 15.8038 13.5357 14.978 12.4537C14.1522 11.3716 13.0476 10.5346 11.7824 10.0325ZM8.99988 9.5C8.40653 9.5 7.82651 9.32405 7.33317 8.99441C6.83982 8.66477 6.4553 8.19623 6.22824 7.64805C6.00117 7.09987 5.94176 6.49667 6.05752 5.91473C6.17327 5.33279 6.459 4.79824 6.87855 4.37868C7.29811 3.95912 7.83266 3.6734 8.41461 3.55765C8.99655 3.44189 9.59975 3.5013 10.1479 3.72836C10.6961 3.95543 11.1646 4.33994 11.4943 4.83329C11.8239 5.32664 11.9999 5.90666 11.9999 6.5C11.9999 7.29565 11.6838 8.05871 11.1212 8.62132C10.5586 9.18393 9.79553 9.5 8.99988 9.5Z" fill="#818187"/>
                    </svg>
                <span>My Portfolio</span>

            </div>
        </li>

        <li className="sidebar-item">
            <div className="sidebar-item-style">
          <svg width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.225 9.665C9.62518 9.3186 9.94616 8.89016 10.1662 8.40877C10.3861 7.92737 10.5 7.40428 10.5 6.875C10.5 5.88044 10.1049 4.92661 9.40165 4.22335C8.69839 3.52009 7.74456 3.125 6.75 3.125C5.75544 3.125 4.80161 3.52009 4.09835 4.22335C3.39509 4.92661 3 5.88044 3 6.875C2.99999 7.40428 3.11385 7.92737 3.33384 8.40877C3.55384 8.89016 3.87482 9.3186 4.275 9.665C3.22511 10.1404 2.33435 10.9081 1.70924 11.8764C1.08412 12.8447 0.751104 13.9725 0.75 15.125C0.75 15.3239 0.829018 15.5147 0.96967 15.6553C1.11032 15.796 1.30109 15.875 1.5 15.875C1.69891 15.875 1.88968 15.796 2.03033 15.6553C2.17098 15.5147 2.25 15.3239 2.25 15.125C2.25 13.9315 2.72411 12.7869 3.56802 11.943C4.41193 11.0991 5.55653 10.625 6.75 10.625C7.94347 10.625 9.08807 11.0991 9.93198 11.943C10.7759 12.7869 11.25 13.9315 11.25 15.125C11.25 15.3239 11.329 15.5147 11.4697 15.6553C11.6103 15.796 11.8011 15.875 12 15.875C12.1989 15.875 12.3897 15.796 12.5303 15.6553C12.671 15.5147 12.75 15.3239 12.75 15.125C12.7489 13.9725 12.4159 12.8447 11.7908 11.8764C11.1657 10.9081 10.2749 10.1404 9.225 9.665ZM6.75 9.125C6.30499 9.125 5.86998 8.99304 5.49997 8.74581C5.12996 8.49857 4.84157 8.14717 4.67127 7.73604C4.50097 7.3249 4.45642 6.8725 4.54323 6.43605C4.63005 5.99959 4.84434 5.59868 5.15901 5.28401C5.47368 4.96934 5.87459 4.75505 6.31105 4.66823C6.7475 4.58142 7.1999 4.62597 7.61104 4.79627C8.02217 4.96657 8.37357 5.25496 8.62081 5.62497C8.86804 5.99498 9 6.42999 9 6.875C9 7.47174 8.76295 8.04403 8.34099 8.46599C7.91903 8.88795 7.34674 9.125 6.75 9.125ZM14.055 9.365C14.535 8.8245 14.8485 8.15679 14.9579 7.44225C15.0672 6.72772 14.9677 5.99681 14.6713 5.3375C14.375 4.67819 13.8943 4.1186 13.2874 3.72607C12.6804 3.33354 11.9729 3.12481 11.25 3.125C11.0511 3.125 10.8603 3.20402 10.7197 3.34467C10.579 3.48532 10.5 3.67609 10.5 3.875C10.5 4.07391 10.579 4.26468 10.7197 4.40533C10.8603 4.54598 11.0511 4.625 11.25 4.625C11.8467 4.625 12.419 4.86205 12.841 5.28401C13.2629 5.70597 13.5 6.27826 13.5 6.875C13.4989 7.26893 13.3945 7.65568 13.197 7.99657C12.9996 8.33745 12.7162 8.62054 12.375 8.8175C12.2638 8.88164 12.1709 8.97325 12.1053 9.08356C12.0396 9.19386 12.0034 9.31918 12 9.4475C11.9969 9.57482 12.0262 9.70085 12.0852 9.81369C12.1443 9.92654 12.2311 10.0225 12.3375 10.0925L12.63 10.2875L12.7275 10.34C13.6315 10.7688 14.3942 11.447 14.9257 12.2947C15.4572 13.1425 15.7354 14.1245 15.7275 15.125C15.7275 15.3239 15.8065 15.5147 15.9472 15.6553C16.0878 15.796 16.2786 15.875 16.4775 15.875C16.6764 15.875 16.8672 15.796 17.0078 15.6553C17.1485 15.5147 17.2275 15.3239 17.2275 15.125C17.2336 13.9741 16.9454 12.8407 16.3901 11.8325C15.8348 10.8244 15.031 9.97498 14.055 9.365Z" fill="#818187"/>
            </svg>
          <span>My Group</span>
            </div>
        </li>

        <li className="sidebar-item">
            <div className="sidebar-item-style">
                <svg width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 4.25V14.75H1.5V4.25H16.5ZM18 2.75H0V16.25H18V2.75ZM16.5 14.75L11.6055 9.7865L9.02175 12.3988L6.45825 9.755L1.5 14.75L5.28825 8.75L1.5 4.25L9.02175 9.8345L16.5 4.25L12.7515 8.7575L16.5 14.75Z" fill="#FF8600"/>
                    </svg>
                <span>Messages</span>
            </div>
        </li>
        <li className="sidebar-item">
            <div className="sidebar-item-style">

                <svg width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.44 5.465C16.3638 5.28174 16.2182 5.13611 16.035 5.06C15.9448 5.02157 15.848 5.00118 15.75 5H12C11.801 5 11.6103 5.07902 11.4696 5.21967C11.329 5.36032 11.25 5.55109 11.25 5.75C11.25 5.94891 11.329 6.13968 11.4696 6.28033C11.6103 6.42098 11.801 6.5 12 6.5H13.9425L9.74995 10.6925L7.28245 8.2175C7.21273 8.1472 7.12978 8.09141 7.03839 8.05333C6.94699 8.01526 6.84896 7.99565 6.74995 7.99565C6.65095 7.99565 6.55292 8.01526 6.46152 8.05333C6.37013 8.09141 6.28718 8.1472 6.21745 8.2175L1.71745 12.7175C1.64716 12.7872 1.59136 12.8702 1.55329 12.9616C1.51521 13.053 1.49561 13.151 1.49561 13.25C1.49561 13.349 1.51521 13.447 1.55329 13.5384C1.59136 13.6298 1.64716 13.7128 1.71745 13.7825C1.78718 13.8528 1.87013 13.9086 1.96152 13.9467C2.05292 13.9847 2.15095 14.0043 2.24995 14.0043C2.34896 14.0043 2.44699 13.9847 2.53839 13.9467C2.62978 13.9086 2.71273 13.8528 2.78245 13.7825L6.74995 9.8075L9.21745 12.2825C9.28718 12.3528 9.37013 12.4086 9.46152 12.4467C9.55292 12.4847 9.65095 12.5043 9.74995 12.5043C9.84896 12.5043 9.94699 12.4847 10.0384 12.4467C10.1298 12.4086 10.2127 12.3528 10.2825 12.2825L15 7.5575V9.5C15 9.69891 15.079 9.88968 15.2196 10.0303C15.3603 10.171 15.551 10.25 15.75 10.25C15.9489 10.25 16.1396 10.171 16.2803 10.0303C16.4209 9.88968 16.5 9.69891 16.5 9.5V5.75C16.4988 5.65199 16.4784 5.55517 16.44 5.465Z" fill="#818187"/>
                    </svg>
                <span>Analytics</span>
            </div>
        </li>
        <li className="sidebar-item">
            <div className="sidebar-item-style">
            <svg width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25 7.25H11.25C11.4489 7.25 11.6397 7.17098 11.7803 7.03033C11.921 6.88968 12 6.69891 12 6.5C12 6.30109 11.921 6.11032 11.7803 5.96967C11.6397 5.82902 11.4489 5.75 11.25 5.75H9.75V5C9.75 4.80109 9.67099 4.61032 9.53033 4.46967C9.38968 4.32902 9.19892 4.25 9 4.25C8.80109 4.25 8.61033 4.32902 8.46967 4.46967C8.32902 4.61032 8.25 4.80109 8.25 5V5.75C7.65327 5.75 7.08097 5.98705 6.65901 6.40901C6.23706 6.83097 6 7.40326 6 8C6 8.59674 6.23706 9.16903 6.65901 9.59099C7.08097 10.0129 7.65327 10.25 8.25 10.25H9.75C9.94892 10.25 10.1397 10.329 10.2803 10.4697C10.421 10.6103 10.5 10.8011 10.5 11C10.5 11.1989 10.421 11.3897 10.2803 11.5303C10.1397 11.671 9.94892 11.75 9.75 11.75H6.75C6.55109 11.75 6.36033 11.829 6.21967 11.9697C6.07902 12.1103 6 12.3011 6 12.5C6 12.6989 6.07902 12.8897 6.21967 13.0303C6.36033 13.171 6.55109 13.25 6.75 13.25H8.25V14C8.25 14.1989 8.32902 14.3897 8.46967 14.5303C8.61033 14.671 8.80109 14.75 9 14.75C9.19892 14.75 9.38968 14.671 9.53033 14.5303C9.67099 14.3897 9.75 14.1989 9.75 14V13.25C10.3467 13.25 10.919 13.0129 11.341 12.591C11.763 12.169 12 11.5967 12 11C12 10.4033 11.763 9.83097 11.341 9.40901C10.919 8.98705 10.3467 8.75 9.75 8.75H8.25C8.05109 8.75 7.86033 8.67098 7.71967 8.53033C7.57902 8.38968 7.5 8.19891 7.5 8C7.5 7.80109 7.57902 7.61032 7.71967 7.46967C7.86033 7.32902 8.05109 7.25 8.25 7.25ZM9 1.25C7.36831 1.25 5.77325 1.73385 4.41655 2.64038C3.05984 3.5469 2.00242 4.83537 1.378 6.34286C0.753575 7.85035 0.590197 9.50915 0.908525 11.1095C1.22685 12.7098 2.01259 14.1798 3.16637 15.3336C4.32016 16.4874 5.79017 17.2732 7.39051 17.5915C8.99085 17.9098 10.6497 17.7464 12.1571 17.122C13.6646 16.4976 14.9531 15.4402 15.8596 14.0835C16.7661 12.7268 17.25 11.1317 17.25 9.5C17.25 7.31196 16.3808 5.21354 14.8336 3.66637C13.2865 2.11919 11.188 1.25 9 1.25ZM9 16.25C7.66498 16.25 6.35994 15.8541 5.2499 15.1124C4.13987 14.3707 3.27471 13.3165 2.76382 12.0831C2.25293 10.8497 2.11925 9.49251 2.3797 8.18314C2.64015 6.87377 3.28303 5.67103 4.22703 4.72703C5.17104 3.78302 6.37377 3.14015 7.68314 2.8797C8.99252 2.61925 10.3497 2.75292 11.5831 3.26381C12.8165 3.7747 13.8707 4.63987 14.6124 5.7499C15.3541 6.85993 15.75 8.16498 15.75 9.5C15.75 11.2902 15.0388 13.0071 13.773 14.273C12.5071 15.5388 10.7902 16.25 9 16.25Z" fill="#818187"/>
                </svg>
            <span>Pack</span>
          </div>
        </li>
        <li className="sidebar-item">
            <div className="sidebar-item-style">
            <svg width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.99 7.6625L14.5725 7.19L15.24 5.855C15.3077 5.71527 15.3303 5.55798 15.3048 5.40483C15.2793 5.25169 15.2068 5.11024 15.0975 5L13.5 3.4025C13.3892 3.29157 13.2464 3.21816 13.0917 3.1926C12.937 3.16704 12.7781 3.19061 12.6375 3.26L11.3025 3.9275L10.83 2.51C10.7801 2.36225 10.6854 2.23372 10.559 2.14231C10.4327 2.05091 10.281 2.00116 10.125 2H7.875C7.71777 1.9996 7.56439 2.04862 7.43653 2.14013C7.30868 2.23165 7.21282 2.36104 7.1625 2.51L6.69 3.9275L5.355 3.26C5.21527 3.19234 5.05798 3.16971 4.90483 3.19523C4.75169 3.22075 4.61024 3.29318 4.5 3.4025L2.9025 5C2.79157 5.11083 2.71816 5.25363 2.6926 5.40834C2.66704 5.56305 2.69061 5.72189 2.76 5.8625L3.4275 7.1975L2.01 7.67C1.86225 7.7199 1.73372 7.81462 1.64231 7.94098C1.55091 8.06734 1.50116 8.21905 1.5 8.375V10.625C1.4996 10.7822 1.54862 10.9356 1.64013 11.0635C1.73165 11.1913 1.86104 11.2872 2.01 11.3375L3.4275 11.81L2.76 13.145C2.69234 13.2847 2.66971 13.442 2.69523 13.5952C2.72075 13.7483 2.79318 13.8898 2.9025 14L4.5 15.5975C4.61083 15.7084 4.75363 15.7818 4.90834 15.8074C5.06305 15.833 5.22189 15.8094 5.3625 15.74L6.6975 15.0725L7.17 16.49C7.22032 16.639 7.31618 16.7684 7.44403 16.8599C7.57189 16.9514 7.72527 17.0004 7.8825 17H10.1325C10.2897 17.0004 10.4431 16.9514 10.571 16.8599C10.6988 16.7684 10.7947 16.639 10.845 16.49L11.3175 15.0725L12.6525 15.74C12.7913 15.806 12.9471 15.8277 13.0987 15.8022C13.2503 15.7767 13.3904 15.7052 13.5 15.5975L15.0975 14C15.2084 13.8892 15.2818 13.7464 15.3074 13.5917C15.333 13.437 15.3094 13.2781 15.24 13.1375L14.5725 11.8025L15.99 11.33C16.1378 11.2801 16.2663 11.1854 16.3577 11.059C16.4491 10.9327 16.4988 10.781 16.5 10.625V8.375C16.5004 8.21777 16.4514 8.06439 16.3599 7.93653C16.2684 7.80868 16.139 7.71282 15.99 7.6625ZM15 10.085L14.1 10.385C13.893 10.4521 13.7032 10.5635 13.5435 10.7113C13.3839 10.8592 13.2584 11.04 13.1756 11.2412C13.0928 11.4424 13.0548 11.6592 13.0642 11.8766C13.0736 12.094 13.1302 12.3067 13.23 12.5L13.6575 13.355L12.8325 14.18L12 13.73C11.8077 13.6342 11.597 13.5808 11.3822 13.5735C11.1675 13.5662 10.9537 13.6051 10.7552 13.6875C10.5568 13.77 10.3785 13.8942 10.2322 14.0516C10.0859 14.2091 9.9752 14.3961 9.9075 14.6L9.6075 15.5H8.415L8.115 14.6C8.04787 14.393 7.93652 14.2032 7.78868 14.0435C7.64083 13.8839 7.46003 13.7584 7.25882 13.6756C7.0576 13.5928 6.84079 13.5548 6.62342 13.5642C6.40605 13.5736 6.19333 13.6302 6 13.73L5.145 14.1575L4.32 13.3325L4.77 12.5C4.86982 12.3067 4.92639 12.094 4.93579 11.8766C4.94518 11.6592 4.90718 11.4424 4.82441 11.2412C4.74164 11.04 4.61609 10.8592 4.45646 10.7113C4.29684 10.5635 4.10696 10.4521 3.9 10.385L3 10.085V8.915L3.9 8.615C4.10696 8.54787 4.29684 8.43652 4.45646 8.28868C4.61609 8.14083 4.74164 7.96003 4.82441 7.75882C4.90718 7.5576 4.94518 7.34079 4.93579 7.12342C4.92639 6.90605 4.86982 6.69333 4.77 6.5L4.3425 5.6675L5.1675 4.8425L6 5.27C6.19333 5.36982 6.40605 5.42639 6.62342 5.43579C6.84079 5.44518 7.0576 5.40718 7.25882 5.32441C7.46003 5.24164 7.64083 5.11609 7.78868 4.95646C7.93652 4.79684 8.04787 4.60696 8.115 4.4L8.415 3.5H9.585L9.885 4.4C9.95213 4.60696 10.0635 4.79684 10.2113 4.95646C10.3592 5.11609 10.54 5.24164 10.7412 5.32441C10.9424 5.40718 11.1592 5.44518 11.3766 5.43579C11.594 5.42639 11.8067 5.36982 12 5.27L12.855 4.8425L13.68 5.6675L13.23 6.5C13.1342 6.69234 13.0808 6.90301 13.0735 7.11777C13.0662 7.33253 13.1051 7.54635 13.1875 7.74476C13.27 7.94318 13.3942 8.12155 13.5516 8.26781C13.7091 8.41407 13.8961 8.5248 14.1 8.5925L15 8.8925V10.085ZM9 6.5C8.40666 6.5 7.82664 6.67595 7.33329 7.00559C6.83994 7.33524 6.45543 7.80377 6.22836 8.35195C6.0013 8.90013 5.94189 9.50333 6.05765 10.0853C6.1734 10.6672 6.45912 11.2018 6.87868 11.6213C7.29824 12.0409 7.83279 12.3266 8.41473 12.4424C8.99667 12.5581 9.59987 12.4987 10.1481 12.2716C10.6962 12.0446 11.1648 11.6601 11.4944 11.1667C11.8241 10.6734 12 10.0933 12 9.5C12 8.70435 11.6839 7.94129 11.1213 7.37868C10.5587 6.81607 9.79565 6.5 9 6.5ZM9 11C8.70333 11 8.41332 10.912 8.16665 10.7472C7.91997 10.5824 7.72771 10.3481 7.61418 10.074C7.50065 9.79994 7.47095 9.49834 7.52882 9.20737C7.5867 8.9164 7.72956 8.64912 7.93934 8.43934C8.14912 8.22956 8.4164 8.0867 8.70737 8.02882C8.99834 7.97095 9.29994 8.00065 9.57403 8.11418C9.84812 8.22771 10.0824 8.41997 10.2472 8.66665C10.412 8.91332 10.5 9.20333 10.5 9.5C10.5 9.89783 10.342 10.2794 10.0607 10.5607C9.77936 10.842 9.39783 11 9 11Z" fill="#818187"/>
                </svg>
            <span>Settings</span>
            </div>
        </li>
      </ul>

        </div>

      {/* Logout Section */}
      <div className="sidebar-logout">
        <img src={user.img} alt={user.fullName} className="profile-picture" />
        {/* <img src={myImage} alt="Description of my image" width={300} height={300} /> */}
        <div className="user-info">
          <h4>{user.fullName}</h4>
          <p className="influencer-text">Influencer</p>
        </div>
        <button className="logout-btn">
            <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 9.5C3.5 9.69891 3.57902 9.88968 3.71967 10.0303C3.86032 10.171 4.05109 10.25 4.25 10.25H9.9425L8.2175 11.9675C8.1472 12.0372 8.09141 12.1202 8.05333 12.2116C8.01525 12.303 7.99565 12.401 7.99565 12.5C7.99565 12.599 8.01525 12.697 8.05333 12.7884C8.09141 12.8798 8.1472 12.9628 8.2175 13.0325C8.28722 13.1028 8.37017 13.1586 8.46157 13.1967C8.55296 13.2347 8.65099 13.2543 8.75 13.2543C8.84901 13.2543 8.94704 13.2347 9.03843 13.1967C9.12983 13.1586 9.21278 13.1028 9.2825 13.0325L12.2825 10.0325C12.3508 9.96117 12.4043 9.87706 12.44 9.785C12.515 9.6024 12.515 9.3976 12.44 9.215C12.4043 9.12294 12.3508 9.03883 12.2825 8.9675L9.2825 5.9675C9.21257 5.89757 9.12955 5.8421 9.03819 5.80426C8.94682 5.76641 8.84889 5.74693 8.75 5.74693C8.65111 5.74693 8.55318 5.76641 8.46181 5.80426C8.37045 5.8421 8.28743 5.89757 8.2175 5.9675C8.14757 6.03743 8.0921 6.12045 8.05426 6.21181C8.01641 6.30318 7.99693 6.40111 7.99693 6.5C7.99693 6.59889 8.01641 6.69682 8.05426 6.78819C8.0921 6.87955 8.14757 6.96257 8.2175 7.0325L9.9425 8.75H4.25C4.05109 8.75 3.86032 8.82902 3.71967 8.96967C3.57902 9.11032 3.5 9.30109 3.5 9.5ZM13.25 2H5.75C5.15326 2 4.58097 2.23705 4.15901 2.65901C3.73705 3.08097 3.5 3.65326 3.5 4.25V6.5C3.5 6.69891 3.57902 6.88968 3.71967 7.03033C3.86032 7.17098 4.05109 7.25 4.25 7.25C4.44891 7.25 4.63968 7.17098 4.78033 7.03033C4.92098 6.88968 5 6.69891 5 6.5V4.25C5 4.05109 5.07902 3.86032 5.21967 3.71967C5.36032 3.57902 5.55109 3.5 5.75 3.5H13.25C13.4489 3.5 13.6397 3.57902 13.7803 3.71967C13.921 3.86032 14 4.05109 14 4.25V14.75C14 14.9489 13.921 15.1397 13.7803 15.2803C13.6397 15.421 13.4489 15.5 13.25 15.5H5.75C5.55109 15.5 5.36032 15.421 5.21967 15.2803C5.07902 15.1397 5 14.9489 5 14.75V12.5C5 12.3011 4.92098 12.1103 4.78033 11.9697C4.63968 11.829 4.44891 11.75 4.25 11.75C4.05109 11.75 3.86032 11.829 3.71967 11.9697C3.57902 12.1103 3.5 12.3011 3.5 12.5V14.75C3.5 15.3467 3.73705 15.919 4.15901 16.341C4.58097 16.7629 5.15326 17 5.75 17H13.25C13.8467 17 14.419 16.7629 14.841 16.341C15.2629 15.919 15.5 15.3467 15.5 14.75V4.25C15.5 3.65326 15.2629 3.08097 14.841 2.65901C14.419 2.23705 13.8467 2 13.25 2Z" fill="#FF8600"/>
            </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
