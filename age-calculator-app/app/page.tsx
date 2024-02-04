'use client'

import Image from 'next/image'
import DayComponent from '@/components/Day/Day.component'
import InputDay from '@/components/InputDay/InputDay.component'
import CardComponent from '@/components/Card/Card.component'
import './style.css'

import IconArrow from '/public/assets/images/icon-arrow.svg'

import dateCalculator from '@/hooks/date-calculator.hook'

export default function Home() {
    const {
        //handlers and dates of birth
        dayB,
        monthB,
        yearB,
        handlerDateB,
        handlerMonthB,
        handlerYearB,
        //calculated date
        day,
        month,
        year,

        //handler to calculate date
        onSend,

        //errors
        dayError,
        monthError,
        yearError,
        hasErrors,
    } = dateCalculator()
    return (
        <main className="main">
            <CardComponent>
                <div className="inputs-row">
                    <InputDay
                        title="day"
                        setDate={async (e) =>
                            handlerDateB(e.currentTarget.value)
                        }
                        value={dayB}
                        placeholder="DD"
                        error={dayError}
                        hasError={hasErrors}
                    />
                    <InputDay
                        title="month"
                        value={monthB}
                        setDate={async (e) =>
                            handlerMonthB(e.currentTarget.value)
                        }
                        placeholder="MM"
                        error={monthError}
                        hasError={hasErrors}
                    />
                    <InputDay
                        title="year"
                        value={yearB}
                        setDate={async (e) =>
                            handlerYearB(e.currentTarget.value)
                        }
                        placeholder="YYYY"
                        error={yearError}
                        hasError={hasErrors}
                    />
                </div>
                <div className="icon-btn-container">
                    <hr className="line-btn" />
                    <button
                        className="send-btn"
                        aria-label="Send date"
                        onClick={onSend}
                    >
                        <IconArrow className="icon" />
                    </button>
                </div>
                <div className="result-col">
                    <DayComponent
                        date={year > 0 ? year.toString() : '- -'}
                        text="YEAR"
                    />
                    <DayComponent
                        date={month > 0 ? month.toString() : '- -'}
                        text="MONTH"
                    />
                    <DayComponent
                        date={day > 0 ? day.toString() : '- -'}
                        text="DAY"
                    />
                </div>
            </CardComponent>
        </main>
    )
}
