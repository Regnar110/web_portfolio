'use client'
import React, { useEffect } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { useState } from 'react'

const fires = [
    [
        "M240.126 309.983C191.22 393.223 164.591 378.395 79.4217 474.139C109.128 418.498 157.853 362.533 167.891 341.607C176.292 325.691 189.116 309.162 204.7 294.588C216.685 282.705 225.13 262.228 237.916 252.731C229.099 279.043 255.593 282.64 240.126 309.983Z",
        "M245 331 C212 407 164.591 378.395 79.4217 474.139 C109.128 418.498 157.853 362.533 167.891 341.607 C176.292 325.691 171 309 190 291 C196 269 225.13 262.228 237.916 252.731 C229.099 279.043 265 294 253 316Z",
        "M215 333 C196 418 176 409 27 537 C56 411 89 366 146 336 C166 324 196 319 204 294 C223 277 225.13 262.228 237.916 252.731 C229.099 279.043 243 294 233 317Z",
        "M245 331 C212 407 164.591 378.395 79.4217 474.139 C109.128 418.498 157.853 362.533 167.891 341.607 C176.292 325.691 171 309 190 291 C196 269 225.13 262.228 237.916 252.731 C229.099 279.043 265 294 253 316Z",
        "M240.126 309.983C191.22 393.223 164.591 378.395 79.4217 474.139C109.128 418.498 157.853 362.533 167.891 341.607C176.292 325.691 189.116 309.162 204.7 294.588C216.685 282.705 225.13 262.228 237.916 252.731C229.099 279.043 255.593 282.64 240.126 309.983Z",
    ],
    [
        "M233.457 264.727C220.704 277.281 221.322 288.878 213.897 301.217C210.417 312.834 199.957 325.872 188.476 337.533C170.302 356.368 53.3879 460.123 14.1703 480.17C63.3464 438.341 114.84 368.609 129.257 342.923C141.025 323.531 157.53 304.159 176.554 287.882C191.311 274.474 204.426 270.666 219.573 260.552C229.698 255.464 233.845 258.17 233.457 264.727Z",
        "M233.457 264.727C231 287 234 291 225 309 220 340 217 338 198 351 170.302 356.368 53.3879 460.123 14.1703 480.17 63.3464 438.341 114.84 368.609 129.257 342.923 141.025 323.531 141 302 156 286 173 274 189 263 219.573 260.552 229.698 255.464 233.845 258.17 233.457 264.727Z",
        "M233.457 264.727C220.704 277.281 235 289 230 313 224 342 218 335 200 365 189 417 68 472 1 498 18 416 47 366 75 340 120 312 129 293 170 270 188 264 204.426 270.666 219.573 260.552 229.698 255.464 233.845 258.17 233.457 264.727Z",
        "M233.457 264.727C231 287 234 291 225 309 220 340 217 338 198 351 170.302 356.368 53.3879 460.123 14.1703 480.17 63.3464 438.341 114.84 368.609 129.257 342.923 141.025 323.531 141 302 156 286 173 274 189 263 219.573 260.552 229.698 255.464 233.845 258.17 233.457 264.727Z",
        "M233.457 264.727C220.704 277.281 221.322 288.878 213.897 301.217C210.417 312.834 199.957 325.872 188.476 337.533C170.302 356.368 53.3879 460.123 14.1703 480.17C63.3464 438.341 114.84 368.609 129.257 342.923C141.025 323.531 157.53 304.159 176.554 287.882C191.311 274.474 204.426 270.666 219.573 260.552C229.698 255.464 233.845 258.17 233.457 264.727Z",
    ],
    [
        "M236.167 255.058C223.713 264.59 209.18 284.906 199.895 296.012C193.184 307.663 181.86 318.509 170.504 327.486C152.374 342.113 74.7935 419.115 10.2329 427.147C86.0728 395.148 115.338 336.772 134.065 313.299C148.715 295.877 166.137 279.872 183.684 268.577C207.91 252.984 230.406 253.534 236.167 255.058Z",
        "M236.167 255.058C232 280 218 294 206 307 195 314 181.86 318.509 170.504 327.486 152.374 342.113 74.7935 419.115 7 383 86.0728 395.148 115.338 336.772 134.065 313.299 143 296 146 281 170 262 205 248 230.406 253.534 236.167 255.058Z",
        "M236.167 255.058C223.713 264.59 209.18 284.906 208 297 199 320 195 330 175 348 158 393 74.7935 419.115 47 468 75 391 86 341 111 307 134 286 153 274 183.684 268.577 207.91 252.984 232 260 236.167 255.058Z",
        "M236.167 255.058C232 280 218 294 206 307 195 314 181.86 318.509 170.504 327.486 152.374 342.113 74.7935 419.115 7 383 86.0728 395.148 115.338 336.772 134.065 313.299 143 296 146 281 170 262 205 248 230.406 253.534 236.167 255.058Z",
        "M236.167 255.058C223.713 264.59 209.18 284.906 199.895 296.012C193.184 307.663 181.86 318.509 170.504 327.486C152.374 342.113 74.7935 419.115 10.2329 427.147C86.0728 395.148 115.338 336.772 134.065 313.299C148.715 295.877 166.137 279.872 183.684 268.577C207.91 252.984 230.406 253.534 236.167 255.058Z",
    ],
    [
        "M234.381 266.158C223.976 276.413 224.114 285.514 217.904 295.44C214.82 304.68 206.203 315.247 196.825 324.761C181.968 340.118 95.9581 413.848 56.6371 443.322C137.968 368.711 137.986 351.408 150.094 330.777C159.93 315.174 173.49 299.445 188.939 286.074C200.946 275.088 213.625 266.809 225.84 258.402C233.954 254.096 234.883 260.99 234.381 266.158Z",
        "M234.381 266.158C237 284 232 300 222 314 212 325 215 324 202 333 181.968 340.118 95.9581 413.848 42 420 137.968 368.711 137.986 351.408 150.094 330.777 159.93 315.174 163 301 174 288 183 271 205 261 225.84 258.402 233.954 254.096 234.883 260.99 234.381 266.158Z",
        "M234.381 266.158C223.976 276.413 224.114 285.514 217.904 295.44 214.82 304.68 206.203 315.247 205 330 195 352 116 438 55 454 103 358 122 347 136 328 149 311 173.49 299.445 188.939 286.074 200.946 275.088 213.625 266.809 225.84 258.402 233.954 254.096 234.883 260.99 234.381 266.158Z",
        "M234.381 266.158C237 284 232 300 222 314 212 325 215 324 202 333 181.968 340.118 95.9581 413.848 42 420 137.968 368.711 137.986 351.408 150.094 330.777 159.93 315.174 163 301 174 288 183 271 205 261 225.84 258.402 233.954 254.096 234.883 260.99 234.381 266.158Z",
        "M234.381 266.158C223.976 276.413 224.114 285.514 217.904 295.44C214.82 304.68 206.203 315.247 196.825 324.761C181.968 340.118 95.9581 413.848 56.6371 443.322C137.968 368.711 137.986 351.408 150.094 330.777C159.93 315.174 173.49 299.445 188.939 286.074C200.946 275.088 213.625 266.809 225.84 258.402C233.954 254.096 234.883 260.99 234.381 266.158Z"
    ],
    [
        "M237.291 298.675C209.537 361.697 187.162 345.644 129.718 412.868C153.291 377.679 170.547 350.791 189.294 327.815C193.531 317.318 227.687 261.534 236.488 254.029C233.577 270.571 245.282 280.528 237.291 298.675Z",
        "M237.291 298.675C209.537 361.697 201 357 129.718 412.868 153.291 377.679 170.547 350.791 177 327 181 312 202 256 236.488 254.029 246 272 245.282 280.528 237.291 298.675Z",
        "M237.291 298.675C219 376 198 362 108 372 108 375 133 343 156 321 179 307 227.687 261.534 236.488 254.029 233.577 270.571 245.282 280.528 237.291 298.675Z",
        "M237.291 298.675C209.537 361.697 201 357 129.718 412.868 153.291 377.679 170.547 350.791 177 327 181 312 202 256 236.488 254.029 246 272 245.282 280.528 237.291 298.675Z",
        "M237.291 298.675C209.537 361.697 187.162 345.644 129.718 412.868C153.291 377.679 170.547 350.791 189.294 327.815C193.531 317.318 227.687 261.534 236.488 254.029C233.577 270.571 245.282 280.528 237.291 298.675Z",
    ],
    [
        "M231.036 297.886C216.481 333.538 193.864 340.4 162.603 371.849C187.129 341.491 184.667 325.506 201.27 309.14C204.677 302.685 231.864 259.541 237.05 255.69C233.474 266.361 236.551 284.378 231.036 297.886Z",
        "M228 319C216.481 333.538 193.864 340.4 162.603 371.849 187.129 341.491 175 324 184 306 192 296 226 258 237.05 255.69 240 268 243 286 234 305Z",
        "M231.036 297.886C218 350 203 350 153 362 172 338 175 324 188 307 200 295 231.864 259.541 237.05 255.69 233.474 266.361 236.551 284.378 231.036 297.886Z",
        "M228 319C216.481 333.538 193.864 340.4 162.603 371.849 187.129 341.491 175 324 184 306 192 296 226 258 237.05 255.69 240 268 243 286 234 305Z",
        "M231.036 297.886C216.481 333.538 193.864 340.4 162.603 371.849C187.129 341.491 184.667 325.506 201.27 309.14C204.677 302.685 231.864 259.541 237.05 255.69C233.474 266.361 236.551 284.378 231.036 297.886Z",
    ],
    [
        "M210.697 284.314C205.662 293.055 197.166 301.193 188.645 307.929C175.042 318.903 100.963 381.435 77.8583 388.044C111.894 365.921 147.254 314.896 161.305 297.284C172.297 284.212 186.237 269.69 198.534 263.73C217.111 254.725 231.183 252.735 236.494 254.195C242.433 252.56 217.663 275.981 210.697 284.314Z",
        "M207 306C195 320 204 307 189 321 179 324 100.963 381.435 70 370 111.894 365.921 147.254 314.896 153 294 166 280 181 267 192 261 214 249 231.183 252.735 236.494 254.195 242.433 252.56 240 274 218 293Z",
        "M210.697 284.314C205.662 293.055 197.166 301.193 188.645 307.929 184 327 127 375 121 414 84 357 128 311 157 293 172.297 284.212 186.237 269.69 198.534 263.73 217.111 254.725 231.183 252.735 236.494 254.195 242.433 252.56 217.663 275.981 210.697 284.314Z",
        "M207 306C195 320 204 307 189 321 179 324 100.963 381.435 70 370 111.894 365.921 147.254 314.896 153 294 166 280 181 267 192 261 214 249 231.183 252.735 236.494 254.195 242.433 252.56 240 274 218 293Z",
        "M210.697 284.314C205.662 293.055 197.166 301.193 188.645 307.929C175.042 318.903 100.963 381.435 77.8583 388.044C111.894 365.921 147.254 314.896 161.305 297.284C172.297 284.212 186.237 269.69 198.534 263.73C217.111 254.725 231.183 252.735 236.494 254.195C242.433 252.56 217.663 275.981 210.697 284.314Z",
    ],
    [
        "M235.353 265.618C228.884 271.789 228.634 277.606 224.636 283.719C222.493 289.507 217.06 295.942 211.22 301.677C201.958 310.945 144.33 368.824 125.293 378.501C149.934 358.003 175.778 316.558 183.622 303.822C189.951 294.215 198.467 284.664 208.004 276.686C215.438 270.106 223.167 265.279 230.63 260.354C235.54 257.899 235.834 262.336 235.353 265.618Z",
        "M235.353 265.618C236 279 233 283 227 293 221 297 220 300 211 307 201.958 310.945 144.33 368.824 113 362 149.934 358.003 175.778 316.558 175 303 179 292 187 289 200 279 211 269 223.167 265.279 230.63 260.354 235.54 257.899 235.834 262.336 235.353 265.618Z",
        "M235.353 265.618C228.884 271.789 228.634 277.606 224.636 283.719 222.493 289.507 217.06 295.942 215 311 211 345 144.33 368.824 152 405 134 352 153 316 177 299 189.951 294.215 198.467 284.664 208.004 276.686 215.438 270.106 223.167 265.279 230.63 260.354 235.54 257.899 235.834 262.336 235.353 265.618Z",
        "M235.353 265.618C236 279 233 283 227 293 221 297 220 300 211 307 201.958 310.945 144.33 368.824 113 362 149.934 358.003 175.778 316.558 175 303 179 292 187 289 200 279 211 269 223.167 265.279 230.63 260.354 235.54 257.899 235.834 262.336 235.353 265.618Z",
        "M235.353 265.618C228.884 271.789 228.634 277.606 224.636 283.719C222.493 289.507 217.06 295.942 211.22 301.677C201.958 310.945 144.33 368.824 125.293 378.501C149.934 358.003 175.778 316.558 183.622 303.822C189.951 294.215 198.467 284.664 208.004 276.686C215.438 270.106 223.167 265.279 230.63 260.354C235.54 257.899 235.834 262.336 235.353 265.618Z",
    ],
    [
        "M233.933 262.584C228.336 265.785 224.613 272.48 219.707 277.166C215.499 282.636 210.011 286.8 204.854 289.883C196.568 294.975 144.05 341.879 132.91 341.308C152.342 332.657 180.525 285.753 190.615 275.684C198.335 268.349 212.162 261.827 219.711 258.427C225.822 255.351 233.24 253.94 238.318 252.83C237.521 256.671 236.125 259.022 233.933 262.584Z",
        "M233.933 262.584C228.336 265.785 227 272 225 278 220 284 222 286 213 302 198 325 144.05 341.879 165 350 127 337 175 285 182 274 195 266 212.162 261.827 219.711 258.427 225.822 255.351 233.24 253.94 238.318 252.83 237.521 256.671 236.125 259.022 233.933 262.584Z",
        "M233.933 262.584C228.336 265.785 224.613 272.48 219.707 277.166 215.499 282.636 210.011 286.8 204.854 289.883 193 329 144 344 123 331 143 320 128 311 157 285 188 263 212.162 261.827 219.711 258.427 225.822 255.351 233.24 253.94 238.318 252.83 237.521 256.671 236.125 259.022 233.933 262.584Z",
        "M233.933 262.584C228.336 265.785 227 272 225 278 220 284 222 286 213 302 198 325 144.05 341.879 165 350 127 337 175 285 182 274 195 266 212.162 261.827 219.711 258.427 225.822 255.351 233.24 253.94 238.318 252.83 237.521 256.671 236.125 259.022 233.933 262.584Z",
        "M233.933 262.584C228.336 265.785 224.613 272.48 219.707 277.166C215.499 282.636 210.011 286.8 204.854 289.883C196.568 294.975 144.05 341.879 132.91 341.308C152.342 332.657 180.525 285.753 190.615 275.684C198.335 268.349 212.162 261.827 219.711 258.427C225.822 255.351 233.24 253.94 238.318 252.83C237.521 256.671 236.125 259.022 233.933 262.584Z",
    ],
    [
        "M230.922 269.635C219.937 288.072 202.142 303.103 182.656 319.42C194.081 306.551 205.814 288.805 208.948 282.271C211.571 277.302 215.575 272.141 220.441 267.591C224.183 263.881 229.452 260.121 233.444 257.156C230.691 265.371 235.752 261.098 230.922 269.635Z",
        "M233 275C225 290 202.142 303.103 177 319 194.081 306.551 202 289 204 285 208 275 204 276 209 269 219 261 229.452 260.121 233.444 257.156 234 266 235.752 261.098 234 270Z",
        "M230.922 269.635C217 323 209 311 196 331 189 307 191 297 200 283 209 273 215.575 272.141 220.441 267.591 224.183 263.881 229.452 260.121 233.444 257.156 230.691 265.371 235.752 261.098 230.922 269.635Z",
        "M233 275C225 290 202.142 303.103 177 319 194.081 306.551 202 289 204 285 208 275 204 276 209 269 219 261 229.452 260.121 233.444 257.156 234 266 235.752 261.098 234 270Z",
        "M230.922 269.635C219.937 288.072 202.142 303.103 182.656 319.42C194.081 306.551 205.814 288.805 208.948 282.271C211.571 277.302 215.575 272.141 220.441 267.591C224.183 263.881 229.452 260.121 233.444 257.156C230.691 265.371 235.752 261.098 230.922 269.635Z",
    ],
    [
        "M219.438 272.743C200.698 285.71 191.075 301.048 172.024 306.869C185.529 297.315 199.216 274.592 206.02 268.771C217.463 258.981 231.074 256.789 233.335 257.414C224.262 265.8 228.201 266.426 219.438 272.743Z",
        "M216 282C206 297 191.075 301.048 169 301 181 294 194 274 200 267 211 257 231.074 256.789 233.335 257.414 228 268 230 268 220 278Z",
        "M219.438 272.743C209 301 199 306 192 317 185 302 180 309 206.02 268.771 217.463 258.981 231.074 256.789 233.335 257.414 224.262 265.8 228.201 266.426 219.438 272.743Z",
        "M216 282C206 297 191.075 301.048 169 301 181 294 194 274 200 267 211 257 231.074 256.789 233.335 257.414 228 268 230 268 220 278Z",
        "M219.438 272.743C200.698 285.71 191.075 301.048 172.024 306.869C185.529 297.315 199.216 274.592 206.02 268.771C217.463 258.981 231.074 256.789 233.335 257.414C224.262 265.8 228.201 266.426 219.438 272.743Z",
    ]


]
const RocketIcon = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const animationProps = useSpring({
        fire1: fires[0][activeIndex],
        fire2:fires[1][activeIndex],
        fire3:fires[2][activeIndex],
        fire4:fires[3][activeIndex],
        fire5:fires[4][activeIndex],
        fire6:fires[5][activeIndex],
        fire7:fires[6][activeIndex],
        fire8:fires[7][activeIndex],
        fire9:fires[8][activeIndex],
        fire10:fires[9][activeIndex],
        fire11:fires[10][activeIndex]
    })
    useEffect(() => {
        const animateRocket = () => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % fires[0].length);
        }
        const intervalId = setInterval(animateRocket, 35);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [fires[0].length]);
  return (
    <svg className='rocket_movement_animation w-[50px]'  viewBox="0 0 514 492" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_12_125)">
            <animated.path fillRule="evenodd" clipRule="evenodd" d={animationProps.fire1} fill="#7584D7"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d={animationProps.fire2} fill="#7584D7"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d={animationProps.fire3} fill="#7584D7"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d={animationProps.fire4} fill="#A5B1F0"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d={animationProps.fire5} fill="#A5B1F0"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d={animationProps.fire6} fill="#C6CEFD"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d={animationProps.fire7} fill="#A5B1F0"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d={animationProps.fire8} fill="#C6CEFD"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d={animationProps.fire9} fill="#C6CEFD"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d={animationProps.fire10} fill="#E2E7FF"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d={animationProps.fire11} fill="#E2E7FF"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M496.454 13.7849C473.906 11.9497 293.255 5.05157 193.54 242.58L263.068 313.38L263.323 313.64C502.62 218.249 498.986 37.5161 497.56 14.9378L496.454 13.7849Z" fill="#ECECEC" stroke="black" strokeWidth="6.3963"/>
            <animated.path d="M389.601 124.498C375.082 109.714 350.189 110.54 334.117 126.323C318.045 142.106 316.781 166.967 331.3 181.751C345.819 196.536 370.711 195.736 386.783 179.953C402.855 164.169 404.119 139.283 389.601 124.498ZM386.153 127.884C398.986 140.952 397.875 162.83 383.668 176.781C369.462 190.732 347.581 191.434 334.748 178.366C321.914 165.297 323.025 143.445 337.231 129.494C351.438 115.543 373.32 114.816 386.153 127.884Z" fill="#CCCCCC"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M380.397 34.8106L431.699 18.2569L484.897 13.2135L497.242 14.4636L493.243 68.7362L477.644 123.387L471.817 132.257L378.263 36.1202" fill="#FF0000"/>
            <animated.path d="M380.397 34.8106L431.699 18.2569L484.897 13.2135L497.242 14.4636L493.243 68.7362L477.644 123.387L471.817 132.257L378.263 36.1202" stroke="black" strokeWidth="6.3963"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M239.923 153.881C239.923 153.881 198.812 110.868 106.736 251.634C106.736 251.634 206.993 157.9 216.946 192.178" fill="#FF0000"/>
            <animated.path d="M239.923 153.881C239.923 153.881 198.812 110.868 106.736 251.634C106.736 251.634 206.993 157.9 216.946 192.178" stroke="black" strokeWidth="6.3963"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M352.97 268.996C352.97 268.996 395.23 310.88 252.817 400.388C252.817 400.388 348.354 301.848 314.262 291.275" fill="#FF0000"/>
            <animated.path d="M352.97 268.996C352.97 268.996 395.23 310.88 252.817 400.388C252.817 400.388 348.354 301.848 314.262 291.275" stroke="black" strokeWidth="6.3963"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M207.359 208.673L193.64 242.598L264.076 313.451L295.842 298.775L207.359 208.673Z" fill="#B3B3B3" stroke="black" strokeWidth="6.3963"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M350.866 290.366L321.234 303.733L320.869 294.652L312.751 291.61L352.873 267.156L358.843 288.039C358.843 288.039 364.197 329.194 257.298 397.986C359.772 318.593 350.473 289.966 350.866 290.366Z" fill="#D20000"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M106.863 249.151C106.863 249.151 197.916 151.899 225.01 178.752C228 181.715 217.315 191.816 217.315 191.816L204.085 183.568L167.094 203.374L106.863 249.151Z" fill="#D20000"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M270.193 272.661C266.509 279.435 260.099 287.595 249.179 297.41C249.384 297.88 249.556 298.423 249.713 299.003L264.077 313.442L289.667 301.624C291.017 299.762 292.151 298.028 293.357 296.249L270.193 272.661Z" fill="#999999"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M309.147 217.207C306.71 214.291 304.573 213.035 304.573 213.035L269.082 243.946C269.082 243.946 280.627 251.56 270.823 270.126L294.035 293.763C325.415 247.866 316.146 225.585 309.147 217.207Z" fill="#CCCCCC"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M206.516 211.714L192.754 240.803L202.793 252.75L224.243 225.455L206.516 211.714Z" fill="#CCCCCC"/>
            <animated.path d="M379.527 35.6656L471.943 129.773" stroke="black" strokeWidth="6.3963"/>
            <animated.path d="M385.477 173.446C378.203 180.589 368.617 184.781 358.828 185.101C349.038 185.421 339.847 181.841 333.276 175.15C326.705 168.459 323.293 159.204 323.79 149.422C324.287 139.64 328.653 130.131 335.927 122.988C343.2 115.845 352.787 111.652 362.576 111.333C372.366 111.013 381.557 114.593 388.128 121.284C394.699 127.975 398.111 137.229 397.614 147.012C397.117 156.794 392.751 166.303 385.477 173.446Z" fill="#B3B3B3" stroke="black" strokeWidth="6.3963" strokeLinecap="round"/>
            <animated.path d="M376.826 164.636C374.482 166.939 371.744 168.795 368.767 170.098C365.791 171.401 362.635 172.125 359.48 172.228C356.324 172.332 353.231 171.813 350.377 170.702C347.523 169.591 344.963 167.909 342.845 165.752C340.727 163.596 339.092 161.006 338.033 158.133C336.974 155.259 336.511 152.157 336.672 149.004C336.833 145.85 337.614 142.708 338.971 139.756C340.327 136.804 342.233 134.1 344.578 131.798C346.922 129.495 349.66 127.639 352.636 126.336C355.613 125.033 358.769 124.309 361.924 124.206C365.08 124.102 368.173 124.62 371.027 125.731C373.881 126.843 376.44 128.525 378.558 130.681C380.676 132.838 382.312 135.427 383.371 138.301C384.43 141.175 384.892 144.277 384.732 147.43C384.571 150.583 383.79 153.726 382.433 156.678C381.077 159.63 379.171 162.334 376.826 164.636Z" fill="#D2E13D" stroke="black" strokeWidth="6.3963" strokeLinecap="round"/>
            <animated.path d="M210.103 211.344L297.407 300.245" stroke="black" strokeWidth="6.3963"/>
            <animated.path d="M293.717 206.918L300.796 214.126L183.256 329.554L176.177 322.346L293.717 206.918Z" fill="#FF0000" stroke="black" strokeWidth="6.3963" strokeLinecap="round"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M296.091 293.289C296.091 293.289 407.654 246.663 459.54 145.365C324.024 280.805 269.743 266.458 269.743 266.458L296.091 293.289Z" fill="#CCCCCC"/>
            <animated.path d="M384.777 157.102L385.883 137.121L337.317 138.926L336.211 158.907L384.777 157.102Z" fill="white"/>
            <animated.path d="M376.826 164.636C374.482 166.939 371.744 168.795 368.767 170.098C365.791 171.401 362.635 172.125 359.48 172.228C356.324 172.332 353.231 171.813 350.377 170.702C347.523 169.591 344.963 167.909 342.845 165.752C340.727 163.596 339.092 161.006 338.033 158.133C336.974 155.259 336.511 152.157 336.672 149.004C336.833 145.85 337.614 142.708 338.971 139.756C340.327 136.804 342.233 134.1 344.578 131.798C346.922 129.495 349.66 127.639 352.636 126.336C355.613 125.033 358.769 124.309 361.924 124.206C365.08 124.102 368.173 124.62 371.027 125.731C373.881 126.843 376.44 128.525 378.558 130.681C380.676 132.838 382.312 135.427 383.371 138.301C384.43 141.175 384.892 144.277 384.732 147.43C384.571 150.583 383.79 153.726 382.433 156.678C381.077 159.63 379.171 162.334 376.826 164.636Z" stroke="black" strokeWidth="6.3963" strokeLinecap="round"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M469.035 113.749C469.035 113.749 492.106 66.7067 487.623 24.6968C463.584 90.7826 443.866 88.1201 443.866 88.1201L469.035 113.749Z" fill="#D20000"/>
            <animated.path d="M352.97 268.996C352.97 268.996 395.23 310.88 252.817 400.388C252.817 400.388 348.354 301.848 314.262 291.275" stroke="black" strokeWidth="6.3963"/>
            <animated.path d="M239.923 153.881C239.923 153.881 198.812 110.868 106.736 251.634C106.736 251.634 206.993 157.9 216.946 192.178" stroke="black" strokeWidth="6.3963"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M392.868 33.5768C392.868 33.5768 458.551 10.7673 487.608 16.8445C516.666 22.9219 392.391 34.8323 392.868 33.5768Z" fill="white"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M261.439 138.087C260.965 136.089 315.496 67.3052 373.034 48.5227C395.021 50.1891 405.392 71.6488 400.345 75.102C356.619 105.016 264.262 149.967 261.439 138.087Z" fill="white"/>
            <animated.path fillRule="evenodd" clipRule="evenodd" d="M496.454 13.7849C473.906 11.9497 293.255 5.05156 193.54 242.58L263.068 313.38L263.323 313.64C502.62 218.249 498.986 37.5161 497.56 14.9378L496.454 13.7849Z" stroke="black" strokeWidth="6.3963"/>
        </g>
    <defs>
    <clipPath id="clip0_12_125">
        <rect width="513.687" height="491.953" fill="white"/>
        </clipPath>
    </defs>
    </svg>

  )
}

export default RocketIcon