import styles from "./AirplaneIcon.module.scss";

const AirplaneIcon = () => (
  <div className={styles.container}>
    <svg
      height="30px"
      width="30px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill="#ffffff"
      stroke="#ffffff"
      transform="rotate(0) matrix(-1, 0, 0, 1, 0, 0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          style={{ fill: "#ffffff" }}
          d="M507.068,194.059c-5.3-6.143-13.759-8.507-21.481-6.013l-59.859,17.264 c-11.406,3.695-23.81,2.792-34.574-2.507l-68.887-33.742l61.093-80.864c4.682-4.847,5.584-12.261,2.139-18.095 c-3.422-5.809-10.336-8.638-16.848-6.903L247.486,116.32l23.597,11.572l-16.23,8.115l-24.69-12.095L124.278,72.015 C65.799,43.262,18.154,52.695,3.16,83.208c-14.994,30.522,26.591,49.402,57.102,64.395l105.696,52.041l54.749,242.78 c1.877,8.982,10.003,15.28,19.224,14.828c9.172-0.464,16.633-7.509,17.632-16.669l33.956-179.158l73.569,36.226 c47.073,21.732,97.259,19.64,112.253-10.86l32.579-70.61C513.507,208.911,512.39,200.19,507.068,194.059z"
        />
      </g>
    </svg>
  </div>
);
export default AirplaneIcon;
