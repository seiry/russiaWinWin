import Head from 'next/head'
import { useCallback, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'

const Main = styled.main`
    .device {
        margin: auto;
    }

    article {
        .bar {
            width: 100%;
        }
        overflow: hidden;
        background-color: white;
        height: 100%;
        width: 100%;
        border-radius: 3rem;

        .detail {
            h1 {
                margin: 0;
                font-size: 1.4rem;
            }
            time {
                color: #929292;
                margin: 1rem 0;
            }
            p {
                margin: 1.5rem 0;
                text-indent: 2rem;
                font-size: 1.1rem;
                line-height: 1.8rem;
            }
            .blue {
                color: #6590bc;
                display: inline;
            }
            background-color: #f6f6f6;
            color: #4c4c4c;
            padding: 1.5rem 1rem;
            .meme {
                width: 100%;
            }
        }
    }
`

const startDate = new Date('2022-02-24T11:00:00') //+5h

export default function Home() {
    const [timeStr, setTimeStr] = useState('一小时22分钟')
    const timerRef = useRef<number>(0)

    //by chatgpt
    const updateTimer = useCallback(() => {
        // Do some work here
        const endDate = new Date()
        // 输入目标日期，即 2022-02-24 11:00:00

        // 计算时间差，单位为毫秒
        const timeDiff = endDate.getTime() - startDate.getTime()

        // 计算年、月、日、小时、分钟和秒数
        let yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365))
        let monthsDiff = Math.floor(
            (timeDiff / (1000 * 60 * 60 * 24 * 30)) % 12
        )
        let daysDiff = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 30)
        let hoursDiff = Math.floor((timeDiff / (1000 * 60 * 60)) % 24)
        let minutesDiff = Math.floor((timeDiff / (1000 * 60)) % 60)
        let secondsDiff = Math.floor((timeDiff / 1000) % 60)
        let millisecondsDiff = Math.floor(timeDiff % 1000)

        // 格式化结果
        let result = ''
        if (yearsDiff > 0) {
            result += yearsDiff + '年'
        }
        if (monthsDiff > 0) {
            result += monthsDiff + '月'
        }
        if (daysDiff > 0) {
            result += daysDiff + '天'
        }
        if (hoursDiff > 0) {
            result += hoursDiff + '小时'
        }
        if (minutesDiff > 0) {
            result += minutesDiff + '分'
        }
        if (secondsDiff > 0) {
            result += secondsDiff + '秒'
        }
        if (millisecondsDiff > 0) {
            result += millisecondsDiff + '毫秒'
        }
        setTimeStr(result)
        // Request another animation frame
        timerRef.current = requestAnimationFrame(updateTimer)
    }, [])

    useEffect(() => {
        //frame
        timerRef.current = requestAnimationFrame(updateTimer)
        return () => {
            if (timerRef.current) {
                cancelAnimationFrame(timerRef.current)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Main>
            <Head>
                <title>
                    基辅攻陷：普京闪电战，一个半小时打趴乌克兰；绍伊古一战封神|基辅|乌克兰|绍伊古|普京_手机网易网
                </title>
                <meta
                    property="og:title"
                    content="基辅攻陷：普京闪电战，一个半小时打趴乌克兰；绍伊古一战封神_手机网易网"
                />
                <meta
                    name="description"
                    content="一小时22分钟，俄军已经拿下基辅，普京帝完全没有把美帝和西方世界当回事啊！乌克兰也太不经打了，一个半小时沦陷普京的动作真实太快了，电视讲话话音未落（参见前文开打了！ "
                />
                <meta
                    property="og:description"
                    content="一小时22分钟，俄军已经拿下基辅，普京帝完全没有把美帝和西方世界当回事啊！乌克兰也太不经打了，一个半小时沦陷普京的动作真实太快了，电视讲话话音未落（参见前文开打了！"
                />
            </Head>
            <div className="device device-iphone-14-pro ">
                <div className="device-frame">
                    <article>
                        <img className="bar" src="/bar.jpg" />
                        <div className="detail">
                            <h1>
                                基辅攻陷：普京闪电战，一个半小时打趴乌克兰；绍伊古一战封神
                            </h1>
                            <time>2022-02-25 14:04:19 浅上胭脂红</time>
                            <img
                                src="https://dingyue.ws.126.net/2022/0225/c6b2acd9j00r7uji20012d000hs00amp.jpg"
                                className="meme"
                            />
                            <p>
                                {timeStr}，俄军已经拿下
                                <span className="blue">基辅</span>，
                                <span className="blue">普京</span>
                                帝完全没有把美帝和西方世界当回事啊！
                            </p>
                        </div>
                    </article>
                </div>
                <div className="device-stripe" />
                <div className="device-header" />
                <div className="device-sensors" />
                <div className="device-btns" />
                <div className="device-power" />
                <div className="device-home" />
            </div>
        </Main>
    )
}
