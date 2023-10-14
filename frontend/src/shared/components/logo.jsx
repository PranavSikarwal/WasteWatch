import React from "react";

const Logo = (props) => {
  return (
    <svg
      className={props.className}
      width="87"
      height="72"
      viewBox="0 0 87 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.0672 0.174482C35.0385 0.49474 33.4739 0.894327 31.1655 1.9369C28.7045 3.04845 27.0342 4.16553 25.1945 5.9303C21.533 9.44267 19.3558 13.9942 18.5227 19.8776C18.4173 20.622 18.3194 21.2433 18.3051 21.258C18.291 21.2728 18.0708 20.955 17.8161 20.5518C16.3453 18.2246 14.1213 15.6768 12.5266 14.4924C11.5586 13.7735 9.54127 12.7034 8.49092 12.3517C6.87374 11.8103 2.43709 11.2904 0.867812 11.4585L0.105713 11.5401L0.774124 11.9937C2.47228 13.1463 4.19598 14.8534 4.98562 16.1646C5.72724 17.3962 6.34763 19.7531 6.52088 21.9962C6.73968 24.8321 7.07254 26.1874 7.95798 27.849C8.92641 29.6663 10.9678 31.551 13.2617 32.7457C14.215 33.2422 15.4124 33.6852 15.5178 33.5803C15.6535 33.4453 15.6644 30.5057 15.5339 29.2555C15.2818 26.8404 14.2975 24.5534 12.4948 22.195C12.2074 21.8188 11.9975 21.4856 12.0285 21.4545C12.1571 21.326 14.4336 23.9102 15.1795 25.0314C16.7046 27.324 17.2416 29.3235 17.6513 34.2368C18.7431 47.3286 27.0809 58.7018 39.1718 63.5921C43.6747 65.4132 48.1647 66.2282 53.0054 66.103C60.2812 65.9147 67.0223 63.552 72.9187 59.1231C73.6504 58.5736 74.5823 57.8037 74.9899 57.412C75.3974 57.0204 75.8458 56.6068 75.9863 56.493C76.4797 56.0935 78.2978 54.0571 79.2029 52.8902C81.6177 49.7768 83.5744 46.0831 84.7506 42.4169C86.8788 35.7847 86.8949 28.3082 84.7952 21.7904C82.151 13.5821 76.7601 6.87389 69.4339 2.6757C67.8796 1.78495 65.2181 0.514513 65.1173 0.615263C65.0933 0.639156 65.4589 0.830064 65.9297 1.03921C71.8293 3.66142 77.2675 8.47083 80.643 14.0515C83.2206 18.313 84.6972 22.5867 85.3404 27.6457C85.594 29.6407 85.5311 33.8149 85.2161 35.8846C84.1161 43.1138 81.1841 49.146 76.2999 54.2287C75.469 55.0933 74.7627 55.8388 74.7304 55.8853C74.698 55.9319 74.4984 56.0708 74.2866 56.1939C74.0635 56.3236 73.9269 56.4832 73.9617 56.5736C73.9945 56.6594 73.9762 56.7015 73.9208 56.6674C73.8655 56.6331 73.7254 56.7099 73.6097 56.8378C73.4939 56.9658 73.3467 57.0704 73.2824 57.0704C73.2182 57.0704 72.9448 57.2514 72.6748 57.4727C71.5055 58.4308 68.9984 59.9923 67.2565 60.8474C62.8072 63.0314 58.7658 64.0489 53.8977 64.2106C44.6802 64.5168 35.9817 61.0423 29.6482 54.5241C26.258 51.0352 23.9302 47.3373 22.323 42.8877C21.1833 39.7326 20.4712 36.0366 20.4712 33.2765V32.1327L21.4717 29.8752C22.0219 28.6334 22.4721 27.6011 22.4721 27.581C22.4721 27.5607 22.7961 26.8654 23.1921 26.0355C24.9698 22.3104 25.2362 21.7218 26.4321 18.8772C27.1285 17.2207 28.2833 14.1837 28.7063 12.8964C29.724 9.79894 28.1738 16.707 26.8094 21.3488C25.9364 24.3194 25.209 26.5013 24.6516 27.8223C24.3784 28.4696 23.8636 29.7143 23.5076 30.5882L22.8604 32.1771L22.9613 33.6484C23.4578 40.8902 26.813 48.0238 32.102 53.0832C36.8167 57.5932 42.3485 60.2949 48.8695 61.2721C50.5368 61.522 55.198 61.5561 56.8402 61.3304C60.2341 60.8639 64.1388 59.6586 66.7074 58.2846C68.3778 57.391 68.9463 57.0559 69.0942 56.8777C69.1786 56.776 69.3658 56.6479 69.5102 56.593C69.85 56.4638 70.1143 56.0111 69.85 56.0111C69.7506 56.0111 69.6693 55.9621 69.6693 55.9024C69.6693 55.8426 69.9006 55.8027 70.1832 55.8136C70.652 55.8317 70.7941 55.7595 71.8016 54.9913C73.0952 54.0049 75.6465 51.4364 76.7511 50.0085C83.6951 41.0322 85.1146 29.434 80.5459 19.0019C78.1905 13.6237 73.704 8.56417 68.5564 5.48093C61.0964 1.01273 52.0477 -0.0243106 43.7804 2.64168C42.9084 2.92287 42.1774 3.13543 42.1561 3.11412C42.04 2.99819 44.9753 0.902565 45.8141 0.502625C46.0524 0.388928 46.2473 0.260637 46.2473 0.217441C46.2473 -0.0489108 40.4663 -0.0791591 38.0672 0.174482ZM57.4342 2.97395C60.1676 3.42038 63.0102 4.30947 65.3964 5.46457C66.8574 6.17182 67.3155 6.52727 67.1373 6.81551C67.0981 6.87884 66.8839 6.93074 66.661 6.93074C66.3262 6.93074 66.2561 6.97417 66.2561 7.18156C66.2561 7.40248 66.207 7.42437 65.8441 7.36552C65.5334 7.31503 65.4322 7.34022 65.4322 7.4678C65.4322 7.78112 65.0898 7.64023 64.7942 7.20533C64.4397 6.68369 64.4886 6.55976 64.9916 6.70405C65.5962 6.87743 66.1384 6.84259 66.1384 6.63026C66.1384 6.38533 64.822 5.77788 64.0759 5.67854C63.7538 5.6357 63.4507 5.53436 63.4026 5.45339C63.2579 5.21057 61.9857 5.11571 61.5911 5.31839C61.4056 5.4136 60.9361 5.55637 60.5477 5.63582C59.6043 5.82861 59.5202 5.87981 58.4161 6.93439C57.6477 7.66824 57.3678 7.86197 56.981 7.9273C56.7168 7.9719 56.4497 8.07054 56.3876 8.14633C56.0899 8.50967 56.2429 9.47798 56.66 9.86968C56.945 10.1376 56.9509 10.138 57.5645 9.93724C58.3124 9.69266 58.4158 9.7767 58.5275 10.7195C58.602 11.3483 58.8375 11.7274 59.066 11.5863C59.1374 11.5422 59.2817 11.3399 59.3868 11.1367C59.4918 10.9337 59.6503 10.6949 59.7391 10.6061C59.8277 10.5175 59.9003 10.3711 59.9003 10.2809C59.9003 10.1906 59.9845 9.86885 60.0875 9.56566C60.2367 9.12582 60.2464 8.96175 60.1347 8.75319C59.921 8.35395 60.0345 8.08007 60.5286 7.80301C60.776 7.66424 61.0793 7.38471 61.2027 7.18191C61.4324 6.8041 61.7835 6.68157 61.7835 6.97912C61.7835 7.07045 61.6246 7.27889 61.4304 7.44238C61.1317 7.69367 61.0773 7.82337 61.0773 8.2844C61.0773 9.13712 61.2224 9.31261 61.8498 9.21857C62.2018 9.16584 62.372 9.18303 62.372 9.2713C62.372 9.34345 62.2925 9.40242 62.1954 9.40242C62.027 9.40242 61.9699 9.58791 62.0102 10.0049C62.0237 10.1462 61.9545 10.1813 61.7432 10.141C61.3592 10.0675 61.259 10.2667 61.2562 11.109C61.254 11.7942 61.2451 11.8141 60.9596 11.7745C60.5651 11.7199 59.8897 11.7358 58.9302 11.8224C58.1413 11.8936 58.1359 11.8921 58.0074 11.5604C57.9117 11.3135 57.9146 11.1243 58.0183 10.8326C58.1743 10.3941 58.0468 10.1446 57.729 10.2666C57.4774 10.3631 57.3109 10.8394 57.3109 11.4631C57.3109 12.0446 57.0259 12.3449 56.4739 12.3449C56.0384 12.3449 55.7318 12.6318 55.2174 13.5208C54.7878 14.2633 54.7591 14.287 54.197 14.3674C53.1743 14.5137 52.5702 15.2669 53.3649 15.4045C53.5817 15.442 53.7713 15.5768 53.8633 15.7587C54.0169 16.0624 54.0661 17.3812 53.9412 17.8473C53.8503 18.1869 53.4071 18.1983 52.7041 17.8793C51.6871 17.4178 51.4268 17.6284 51.4251 18.9142C51.4246 19.2823 51.3703 19.9154 51.3046 20.3212C51.1644 21.1846 51.2411 21.4047 51.8757 21.9606L52.3056 22.3372L51.9961 22.6668C51.4787 23.2181 51.08 24.1617 50.9498 25.1425C50.7539 26.6173 50.4233 27.2566 49.653 27.6495C49.0819 27.9409 48.8722 28.3383 48.698 29.4591C48.5908 30.1487 48.5941 30.5506 48.7129 31.317C48.8289 32.0641 48.8332 32.4058 48.7309 32.7656C48.547 33.4134 48.4469 35.2781 48.573 35.7081C48.63 35.9023 48.8052 36.1253 48.9626 36.2037C49.3943 36.4189 49.6421 36.7844 49.8526 37.517C50.3657 39.302 51.0295 39.7721 53.0897 39.8096C54.049 39.8271 54.0915 39.8159 54.7521 39.374C55.1249 39.1245 55.5012 38.9479 55.5883 38.9813C55.6754 39.0147 55.7784 39.2367 55.817 39.4747C55.9108 40.0529 56.0776 40.2277 56.6178 40.3141C56.8671 40.3539 57.1178 40.4462 57.175 40.519C57.2321 40.5919 57.3111 41.1546 57.3505 41.7696C57.4408 43.1776 57.6529 43.9885 58.3266 45.5018C58.8178 46.6054 58.8573 46.7639 58.8095 47.4438C58.7809 47.8511 58.6647 48.5019 58.5514 48.8903C58.2763 49.8332 58.3672 50.6706 58.8432 51.5785C59.0452 51.9642 59.3126 52.7571 59.4373 53.3405C59.562 53.9241 59.831 54.7637 60.035 55.2063C60.4703 56.1507 60.5357 56.1688 62.0403 55.7629C62.8694 55.5391 63.0157 55.4539 63.5196 54.9019C63.827 54.5651 64.1846 54.081 64.314 53.8261C64.4435 53.5713 64.7161 53.2019 64.9198 53.005C65.1353 52.7968 65.3478 52.4277 65.4278 52.1222C65.5034 51.8336 65.7075 51.3092 65.8813 50.957C66.1343 50.4438 66.2791 50.29 66.6091 50.1827C67.2194 49.9843 67.3649 49.5911 67.3699 48.1253C67.3723 47.4456 67.3477 46.4899 67.3153 46.0014C67.2594 45.1574 67.2781 45.0697 67.6927 44.2359C67.9327 43.7534 68.7114 42.4129 69.4233 41.2571C70.1353 40.1013 70.7951 38.9096 70.8895 38.6089C71.5676 36.4482 71.6472 35.8649 71.2741 35.7891C71.1535 35.7646 70.6603 35.9394 70.1785 36.1776C69.1264 36.6975 68.9356 36.6656 68.9857 35.9782C69.0183 35.5317 69.0579 35.4737 69.3751 35.409C69.921 35.2977 70.2146 35.103 71.1636 34.223C71.6472 33.7746 72.2395 33.3074 72.4799 33.1849C72.9656 32.937 73.3427 32.3348 73.8382 31.0156C74.2573 29.8998 74.2379 29.7411 73.6214 29.2359C73.3352 29.0014 73.0432 28.6436 72.9725 28.441C72.8392 28.0586 72.6695 28.0977 72.5926 28.5285C72.5574 28.7256 72.4435 28.7695 71.8905 28.7987L71.2304 28.8335L71.1752 28.2593C71.138 27.8716 70.9991 27.5092 70.7478 27.144C70.3349 26.5438 70.293 26.3307 70.5464 26.1203C70.8358 25.8801 71.1834 26.0897 71.3167 26.5849C71.5215 27.3457 72.4226 27.9055 72.8134 27.5147C72.9935 27.3346 73.1737 27.472 73.3682 27.9375C73.5245 28.3115 73.5694 28.3345 74.2786 28.4017C74.6889 28.4407 75.2894 28.485 75.6131 28.5004C76.1442 28.5257 76.205 28.5572 76.2365 28.8227C76.3123 29.4619 76.5024 29.7393 76.9179 29.8173C77.31 29.8908 77.3189 29.9048 77.2489 30.3425C77.165 30.8671 77.3793 31.3996 77.5896 31.1893C77.8555 30.9234 78.0259 31.051 78.0259 31.5161C78.0259 31.7675 78.1341 32.787 78.2664 33.7818C78.7404 37.3464 79.1535 38.4493 79.6159 37.3853L79.7822 37.0028L79.7886 37.709C79.7921 38.0974 79.8483 38.4946 79.9133 38.5917C80.0147 38.7431 80.0628 38.7311 80.2508 38.5075C80.5818 38.1136 80.6691 37.4554 80.4371 37.1015C80.3156 36.916 80.1776 36.8335 80.0627 36.8775C79.9191 36.9326 79.898 36.8911 79.9624 36.6809C80.0074 36.5342 80.0867 35.8052 80.1387 35.0607C80.265 33.2525 80.5812 32.5117 81.3389 32.2475L81.71 32.1181L81.6313 33.4138C81.4186 36.9158 80.451 40.537 78.8482 43.8293C77.494 46.6106 76.2946 48.3851 74.143 50.7896C73.4183 51.5996 72.963 52.1925 73.0914 52.1588C73.4525 52.0644 73.356 52.3008 72.8449 52.7624C72.4829 53.0895 72.306 53.1732 72.0908 53.1191C71.8684 53.0633 71.7522 53.1266 71.534 53.4222C71.3823 53.6277 71.0812 53.8698 70.8648 53.9604C70.2744 54.2075 68.9631 55.2939 68.9631 55.5361C68.9631 55.7473 68.7716 55.97 68.5512 56.0152C68.4864 56.0284 68.3108 56.086 68.161 56.1429C68.0112 56.1999 67.8118 56.2465 67.718 56.2465C67.6243 56.2465 67.4555 56.2929 67.3431 56.3496C66.5723 56.7384 63.9741 57.9274 63.4901 58.1127C58.0263 60.2065 52.1401 60.6442 46.6592 59.3645C44.6603 58.8978 42.0145 57.9826 40.7736 57.3285L40.3035 57.0808L40.8331 57.0631C41.3404 57.0462 41.3491 57.0399 41.0391 56.9175C40.8527 56.8437 40.7154 56.6994 40.7154 56.5769C40.7154 56.4599 40.6625 56.3576 40.5977 56.3495C40.533 56.3414 40.4315 56.3282 40.3721 56.3201C40.156 56.2906 40.0935 56.1288 40.2983 56.1288C40.4572 56.1288 40.4778 56.0915 40.3825 55.9766C40.2825 55.8561 40.338 55.8339 40.6485 55.8701C41.1642 55.9304 41.2807 55.7153 40.9338 55.3436L40.6566 55.0468L40.9508 55.0712C41.462 55.1135 41.5393 55.0766 41.5393 54.7896C41.5393 54.6357 41.621 54.3144 41.7208 54.0754C41.8536 53.7577 41.8811 53.4536 41.8233 52.9429C41.7488 52.2844 41.7585 52.2448 41.9949 52.2448C42.1328 52.2448 42.2455 52.1918 42.2455 52.1271C42.2455 52.0623 42.3983 52.0094 42.5851 52.0094C43.1486 52.0094 43.2869 51.6519 43.2482 50.2952C43.2298 49.652 43.1747 48.8209 43.1258 48.4483C43.0408 47.8009 43.0565 47.739 43.4773 47.0571C43.9809 46.2413 44.1042 45.6364 43.8756 45.1042C43.7882 44.9008 43.3066 44.3535 42.8052 43.8881C42.0528 43.19 41.807 43.0304 41.3989 42.9756C41.0531 42.9293 40.821 42.8104 40.6275 42.5804C40.4752 42.3994 40.1679 42.1853 39.9446 42.1045C39.7212 42.0238 39.5384 41.9189 39.5384 41.8715C39.5384 41.8242 39.4325 41.7518 39.303 41.7107C39.1301 41.6559 39.0676 41.5326 39.0676 41.2464C39.0676 41.0321 38.9914 40.7935 38.8982 40.716C38.8048 40.6387 38.5898 40.2124 38.4203 39.7687C38.035 38.7604 37.9197 38.6607 37.2541 38.7605C36.695 38.8443 36.7176 38.8655 36.5488 38.1032C36.5023 37.8936 36.3636 37.7509 36.1259 37.668C35.7811 37.5478 35.7721 37.5249 35.7721 36.7735C35.7721 36.3485 35.7203 36.0023 35.6567 36.0023C35.5933 36.0023 35.3216 36.0902 35.0531 36.1977C34.6702 36.351 34.5175 36.3637 34.3462 36.2566C34.2259 36.1815 34.0487 36.12 33.9523 36.12C33.8561 36.12 33.695 35.9611 33.5947 35.7669C33.4853 35.5555 33.3189 35.4138 33.1796 35.4138C33.0518 35.4138 32.9473 35.3609 32.9473 35.2961C32.9473 35.2314 32.8679 35.1784 32.7708 35.1784C32.6737 35.1784 32.5942 35.2332 32.5942 35.3001C32.5942 35.367 32.4061 35.5327 32.1763 35.6683C31.8978 35.8326 31.7355 36.0296 31.6896 36.2587C31.6243 36.5856 31.5945 36.6007 31.0786 36.5672C30.6079 36.5366 30.5141 36.4855 30.3681 36.1795C30.2754 35.9855 30.1691 35.3128 30.1317 34.6846C30.0943 34.0564 30.0024 33.4811 29.9275 33.4061C29.8525 33.3313 29.6142 33.2333 29.3979 33.1887C29.0216 33.1109 29.0046 33.0845 29.0102 32.5834C29.0133 32.2952 29.0899 31.7299 29.1801 31.3271C29.2705 30.9242 29.3138 30.5642 29.2765 30.5269C29.1725 30.4227 28.5787 30.6014 28.5333 30.7505C28.5111 30.823 28.4606 31.078 28.421 31.3172C28.3308 31.861 27.9724 32.0213 27.6246 31.6735C27.4563 31.5053 27.3751 31.2288 27.3356 30.6901L27.2805 29.9408L28.0357 29.5057C28.4512 29.2663 29.0939 28.8238 29.464 28.5223C29.8342 28.2208 30.1511 27.9929 30.1683 28.0159C30.1855 28.0388 30.269 28.2317 30.3537 28.4447C30.5726 28.9941 30.7639 28.8515 30.8061 28.1072C30.8414 27.486 30.8649 27.4475 31.6921 26.6453C32.7951 25.5755 33.4682 24.6167 34.3365 22.8789C35.1114 21.3277 35.4549 20.3994 35.7199 19.1395C35.8622 18.4633 35.981 18.2159 36.3629 17.8018C36.8301 17.2949 36.9527 16.9064 36.6958 16.7475C36.6212 16.7014 36.4869 16.7641 36.3969 16.8871C36.1791 17.185 36.0383 16.9583 36.102 16.4125C36.1331 16.1466 36.2477 15.9403 36.4317 15.8198C36.753 15.6093 36.8015 15.405 36.5302 15.405C36.4293 15.405 36.3794 15.3521 36.4194 15.2874C36.4594 15.2226 36.6174 15.1697 36.7704 15.1697C36.9235 15.1697 37.2061 15.0372 37.3984 14.8754C37.9734 14.3915 37.9654 14.428 37.1793 15.8661C36.9088 16.3609 36.964 16.4643 37.4982 16.4643C37.8082 16.4643 37.8995 16.5069 37.8525 16.6294C37.7622 16.8647 37.8984 16.9575 38.0947 16.7946C38.2247 16.6868 38.2864 16.6935 38.3726 16.825C38.6466 17.2422 39.0822 15.8721 38.8271 15.3954C38.7359 15.225 38.6316 15.1801 38.4557 15.2359C38.2365 15.3056 38.2196 15.279 38.2926 14.9767C38.6142 13.6438 38.622 13.4442 38.3728 12.9555C38.2146 12.6454 38.037 12.4662 37.8631 12.4416C37.6553 12.4121 37.6042 12.3388 37.6317 12.1095C37.7155 11.4093 37.6603 10.8023 37.4779 10.4177C37.2532 9.94418 37.3158 9.62428 37.7302 9.12853C37.9382 8.87971 37.9886 8.7167 37.93 8.48119C37.8606 8.20283 37.8734 8.18447 38.0401 8.32182C38.2628 8.5052 38.5133 8.39939 38.9428 7.94013L39.2298 7.63329L38.8545 7.49158C38.4001 7.32009 38.3925 7.23052 38.7838 6.65486C39.0153 6.31412 39.3446 6.0819 40.1581 5.68596C41.2816 5.13925 41.7669 5.04886 42.0095 5.3411C42.1293 5.48552 42.1073 5.55602 41.8869 5.73457C41.5107 6.03918 41.4686 6.4317 41.8061 6.48761C42.0563 6.52904 42.0519 6.54151 41.7148 6.74619C41.1624 7.08175 40.9153 7.46839 41.0693 7.75616C41.1475 7.90223 41.1674 8.25956 41.1205 8.6741C41.035 9.42972 41.0737 9.49351 41.7988 9.79388C42.2117 9.9649 42.2557 9.96066 42.6227 9.71549C42.836 9.57308 43.0993 9.27977 43.2078 9.0638C43.3163 8.84782 43.5083 8.55758 43.6345 8.41881C43.7606 8.28004 43.9211 8.05547 43.9909 7.91965C44.0807 7.74486 44.3941 7.59409 45.0637 7.40342C45.584 7.25524 46.0725 7.05833 46.1493 6.96582C46.3734 6.6957 46.8307 6.50844 47.8297 6.27728C48.3441 6.15817 48.8551 5.97067 48.9654 5.86039C49.0756 5.75022 49.333 5.62334 49.5374 5.57838C49.7972 5.5213 49.8978 5.43797 49.8717 5.30156C49.819 5.02602 48.7053 4.93069 45.1589 4.89785C43.5569 4.88314 42.246 4.83759 42.2459 4.79675C42.2453 4.66916 44.5616 3.88352 45.9959 3.52466C47.1806 3.22829 48.7998 2.9397 50.249 2.76644C51.2264 2.64969 56.3554 2.79787 57.4342 2.97395ZM51.2728 4.47131C51.1305 4.51039 50.8287 4.65975 50.6021 4.8031L50.1902 5.06404L50.8375 4.98342C51.5523 4.89455 51.694 4.84241 51.6063 4.70059C51.574 4.64809 51.9173 4.63044 52.3695 4.66116C52.8834 4.69611 53.1915 4.67234 53.1915 4.59772C53.1915 4.46272 51.6693 4.36244 51.2728 4.47131ZM60.2271 4.42764C60.5039 4.4526 60.9276 4.45224 61.1686 4.42694C61.4097 4.40163 61.1832 4.38127 60.6654 4.38174C60.1475 4.38209 59.9502 4.40281 60.2271 4.42764ZM50.5482 6.75419C50.292 6.84529 49.7959 6.90579 49.4457 6.88872C49.0247 6.86813 48.7538 6.91273 48.6462 7.02019C48.4309 7.23558 48.4387 7.51924 48.6601 7.51924C48.7572 7.51924 48.8366 7.57102 48.8366 7.63423C48.8366 7.69743 48.9596 7.82984 49.1101 7.92836C49.3555 8.08913 49.4487 8.08807 50.0222 7.91788C50.9143 7.65318 51.3308 7.33621 51.2855 6.95652C51.2403 6.57776 51.1298 6.5474 50.5482 6.75419ZM53.5852 9.80859C53.1844 9.98302 53.0766 10.1944 53.0518 10.8556C53.0394 11.1867 53.1051 11.3351 53.3491 11.5271C53.6937 11.7982 53.761 12.1641 53.4857 12.2698C53.2526 12.3592 53.2556 13.2646 53.4902 13.5748C53.6063 13.7282 53.8053 13.8043 54.0901 13.8043C55.0381 13.8043 55.1926 12.8603 54.4716 11.475C54.1529 10.8623 54.1217 10.7231 54.227 10.38C54.3222 10.0696 54.3109 9.95018 54.1731 9.81236C54.0772 9.71632 53.9891 9.63993 53.9776 9.6424C53.966 9.64499 53.7894 9.71973 53.5852 9.80859ZM52.1981 11.8663C51.9584 12.1313 51.674 12.8751 51.6666 13.257C51.6588 13.657 51.9534 13.583 52.5467 13.0361C52.9183 12.6936 53.0738 12.4575 53.0738 12.2358C53.0738 11.6531 52.5797 11.4446 52.1981 11.8663ZM66.7268 16.1557C66.7268 16.2448 66.6474 16.3837 66.5503 16.4643C66.4094 16.5812 66.3381 16.5812 66.1972 16.4643C65.902 16.2193 65.9866 15.9935 66.3737 15.9935C66.5951 15.9935 66.7268 16.054 66.7268 16.1557ZM71.1755 16.5892C71.1973 16.7753 71.1194 16.971 70.9695 17.1066C70.5934 17.4471 70.6497 18.0248 71.0958 18.4001C71.4126 18.6667 71.4762 18.8177 71.5592 19.4993C71.6121 19.934 71.6931 20.5727 71.7394 20.919C71.8303 21.6002 71.7367 21.7555 71.2329 21.759C70.8637 21.7615 70.7287 21.4257 70.7281 20.5033C70.7275 19.6256 70.3448 18.329 69.9144 17.7469C69.5636 17.2726 69.602 17.1368 70.2233 16.6527C70.8462 16.1674 71.1241 16.1489 71.1755 16.5892ZM65.0135 16.8437C65.1143 16.9875 65.1968 17.1962 65.1968 17.3074C65.1968 17.6533 65.3941 17.6574 66.0708 17.3255L66.7244 17.005L67.0492 17.2432C67.2754 17.4089 67.4599 17.739 67.656 18.329C67.811 18.7952 67.9023 19.2121 67.859 19.2554C67.8157 19.2989 67.4505 19.1652 67.0476 18.9585C66.1941 18.5209 65.7859 18.4906 65.2448 18.825C64.8 19.1 64.634 19.0511 64.0984 18.4882C63.775 18.1484 63.7706 18.1272 63.9513 17.7777C64.0537 17.5797 64.1375 17.332 64.1375 17.2275C64.1375 16.621 64.6885 16.3796 65.0135 16.8437ZM59.3924 16.9427C59.7972 17.0956 60.3351 17.591 60.5565 18.0148C60.6469 18.1878 60.7555 18.7174 60.7978 19.1918C60.8845 20.1654 61.1968 21.1212 61.5529 21.5035C61.8527 21.8252 61.9498 21.8252 62.2497 21.5031C62.5139 21.2196 62.5683 20.5974 62.3625 20.2129C62.2033 19.9156 62.2538 19.8652 62.7243 19.8518C63.1941 19.8385 63.309 20.0157 63.3135 20.7603C63.3155 21.084 63.3839 21.4812 63.4655 21.6431C63.6034 21.9159 63.6993 21.9443 64.7858 22.0333C65.4302 22.086 65.965 22.1389 65.9744 22.151C65.9837 22.163 66.0273 22.3051 66.0712 22.467L66.1508 22.7612L65.9198 22.4964C65.6217 22.1548 65.5426 22.1624 65.1527 22.5691C64.851 22.8841 64.8425 22.9198 65.0255 23.1028C65.1353 23.2126 65.3196 23.2712 65.4445 23.236C66.1671 23.0324 66.1127 22.972 66.0488 23.9057C66.0165 24.3768 65.9838 24.7692 65.976 24.7779C65.9682 24.7866 65.4586 24.7512 64.8437 24.6991C63.7812 24.6093 63.71 24.586 63.4129 24.2303L63.1003 23.8559L62.744 24.1193C62.3888 24.3819 62.2472 24.3862 61.4424 24.1582C61.1681 24.0804 61.1619 24.0933 61.2221 24.6262C61.2679 25.0327 61.2437 25.174 61.1284 25.174C60.8949 25.174 60.1543 24.7248 59.4454 24.1531C58.9771 23.7755 58.7103 23.644 58.4123 23.644H58.0105L58.0878 22.8902C58.1537 22.247 58.1326 22.1026 57.9439 21.9057C57.3351 21.2703 56.6341 21.251 55.2911 21.8329C54.6056 22.13 54.118 22.263 53.6743 22.2743C52.9766 22.292 52.6983 22.0567 53.2714 21.9336C54.1968 21.7346 54.4359 21.4461 54.5863 20.3463C54.6745 19.7013 54.7474 19.5404 55.09 19.2346C55.3102 19.0381 55.6457 18.6653 55.8356 18.4064C56.3617 17.6886 56.5952 17.5236 57.0845 17.5236C57.6465 17.5236 58.098 17.8906 58.6249 18.7754C58.8409 19.138 59.1359 19.6271 59.2805 19.8622C59.5789 20.3472 59.6236 20.7015 59.3866 20.7015C59.0922 20.7015 58.6056 21.1809 58.6056 21.4709C58.6056 22.1481 59.7135 22.0727 60.1444 21.3661C60.3166 21.0837 60.3703 20.7749 60.3706 20.0649L60.3711 19.134L59.8534 18.6525C59.2504 18.0916 58.8421 17.4581 58.8415 17.0823C58.841 16.7839 58.9197 16.764 59.3924 16.9427ZM57.3109 18.576C57.3109 18.8959 57.258 19.1902 57.1932 19.2303C57.0073 19.3451 57.0517 20.2997 57.2506 20.4648C57.609 20.7622 57.7482 20.5229 57.8088 19.5049C57.8718 18.4499 57.7757 17.9944 57.4904 17.9944C57.3538 17.9944 57.3109 18.1333 57.3109 18.576ZM62.2837 22.3529C61.9397 22.4912 61.9473 22.6748 62.3041 22.8374C62.7154 23.0247 63.4313 22.8689 63.4313 22.592C63.4313 22.2444 62.8531 22.124 62.2837 22.3529ZM66.475 27.2803C66.6944 27.7903 66.8867 28.4243 67.498 30.6523C67.5877 30.9789 67.8417 31.4821 68.0626 31.7705C68.622 32.5009 68.9745 33.8243 68.7975 34.5296C68.625 35.2167 68.3354 34.7092 67.5055 32.2657C67.1527 31.2265 66.6798 30.0294 66.4548 29.6053C66.0345 28.8134 65.7873 27.4894 65.9587 26.9492C66.0786 26.5716 66.205 26.6527 66.475 27.2803ZM31.002 27.7737C30.947 27.9469 31.0043 28.094 31.1963 28.2731C31.4343 28.4947 31.4431 28.5316 31.2663 28.5657C31.0472 28.6078 30.9892 29.1106 31.1705 29.3968C31.3826 29.7318 31.5167 29.3785 31.5227 28.4683C31.5282 27.6197 31.5069 27.528 31.3044 27.528C31.1803 27.528 31.0452 27.6377 31.002 27.7737ZM29.835 29.7905C29.7343 29.9344 29.6517 30.2084 29.6517 30.3995V30.747L29.9354 30.4804C30.2113 30.2213 30.2253 30.2199 30.4456 30.4305C30.5703 30.5496 30.7868 30.725 30.927 30.8202C31.0896 30.9306 31.1818 31.1164 31.1818 31.3331C31.1818 31.6938 31.1488 31.6884 31.9601 31.4623C32.2722 31.3755 32.4645 31.7555 32.1871 31.9108C31.92 32.0602 31.9555 32.4714 32.2352 32.4714C32.3615 32.4714 32.5135 32.5582 32.5729 32.6644C32.69 32.8739 32.9473 32.7881 32.9473 32.5396C32.9473 32.4421 33.0482 32.4056 33.225 32.4394C33.5319 32.4981 33.6752 32.2854 33.5782 31.9146C33.5032 31.6279 32.9465 31.2944 32.5429 31.2944C32.3728 31.2944 32.2071 31.2251 32.1746 31.1403C32.082 30.8988 30.4036 29.5289 30.2003 29.5289C30.1002 29.5289 29.9358 29.6466 29.835 29.7905ZM25.7677 31.1216C25.7677 31.5533 26.0346 32.1267 26.4446 32.5756C26.6412 32.7909 26.8917 33.072 27.0013 33.2002C27.1425 33.3656 27.2841 33.4124 27.4882 33.3612C27.7253 33.3016 27.8115 33.3545 27.9782 33.6612C28.2537 34.1683 28.8388 34.7665 29.0591 34.7665C29.172 34.7665 29.2977 34.9653 29.394 35.2961C29.6231 36.083 30.2295 37.297 30.3935 37.297C30.4722 37.297 30.6029 37.4029 30.6837 37.5324C30.8855 37.8554 31.0641 37.8277 31.0641 37.4736C31.0641 36.9647 31.2541 37.1522 31.4738 37.878C31.7086 38.6538 31.6798 40.0997 31.4232 40.4088C31.3254 40.5267 31.2998 40.8547 31.3425 41.4405C31.377 41.9128 31.3995 42.4316 31.3924 42.5935C31.3548 43.4515 31.3926 43.6705 31.6212 43.9174C31.756 44.0632 32.1663 44.818 32.5328 45.5948C32.8993 46.3716 33.3314 47.2845 33.493 47.6234C33.6999 48.0572 33.9933 48.4019 34.4836 48.7871C35.1263 49.292 35.1999 49.3995 35.4322 50.1717C35.5707 50.6322 35.7548 51.1943 35.8413 51.4209C35.9279 51.6474 36.0574 52.0643 36.1292 52.3473C36.2672 52.8917 37.3171 54.9856 37.6272 55.335C38.0107 55.767 37.6403 55.6595 36.8688 55.1148C30.5853 50.6794 26.5207 44.5963 24.9576 37.2887C24.6393 35.8005 24.3553 33.4652 24.3553 32.3355V31.4276L24.9732 31.1354C25.7569 30.7648 25.7677 30.7646 25.7677 31.1216ZM31.0139 32.1044C30.9429 32.2193 31.3774 32.8245 31.5309 32.8245C31.7018 32.8245 31.7731 32.4611 31.648 32.2275C31.5236 31.995 31.1287 31.9184 31.0139 32.1044ZM33.8171 32.1684C33.71 32.4475 33.8615 32.7292 34.0945 32.6844C34.2248 32.6593 34.3008 32.5374 34.3008 32.3537C34.3008 32.0181 33.9294 31.8759 33.8171 32.1684ZM69.8842 47.3897C69.7882 47.5029 69.5687 47.8912 69.3964 48.2525C69.2239 48.6139 68.9026 49.0736 68.6822 49.2742C68.356 49.571 68.2665 49.7557 68.2021 50.2651C68.1585 50.6094 68.0206 51.2759 67.8956 51.7458C67.6119 52.8131 67.6082 52.78 67.9786 52.4887C68.1491 52.3546 68.4272 52.2442 68.5965 52.2435C68.8621 52.2423 68.9479 52.14 69.2229 51.4961C69.8022 50.1394 70.1412 48.972 70.2172 48.0721C70.2947 47.156 70.2171 46.997 69.8842 47.3897ZM68.395 52.5497C68.1273 52.7372 68.1474 52.9509 68.4325 52.9509C68.5851 52.9509 68.8035 52.5166 68.702 52.4152C68.6759 52.3892 68.5378 52.4497 68.395 52.5497ZM74.495 56.4819C74.4016 56.5396 74.2988 56.5603 74.2664 56.5279C74.234 56.4956 74.2839 56.4219 74.3773 56.3642C74.4706 56.3065 74.5735 56.2858 74.6058 56.3182C74.6382 56.3506 74.5883 56.4242 74.495 56.4819ZM42.2749 57.037C42.4529 57.0639 42.7443 57.0639 42.9223 57.037C43.1002 57.01 42.9546 56.988 42.5986 56.988C42.2426 56.988 42.097 57.01 42.2749 57.037ZM52.603 71.6705C52.603 71.7783 52.4094 71.8 51.8674 71.753C51.4629 71.7179 51.0258 71.7299 50.8964 71.7797C50.5543 71.9111 52.5896 72.0659 53.4028 71.9704C54.4483 71.8475 54.4278 71.7317 53.3386 71.6078C52.786 71.545 52.603 71.5606 52.603 71.6705ZM54.4862 71.8489C54.4862 71.9779 54.5489 72.0193 54.6724 71.9719C54.7748 71.9326 54.9955 71.9004 55.1627 71.9004C55.5669 71.9004 55.4705 71.8323 54.9275 71.7341C54.5634 71.6683 54.4862 71.6884 54.4862 71.8489Z"
        fill="#5FA386"
      />
    </svg>
  );
};

export default Logo;