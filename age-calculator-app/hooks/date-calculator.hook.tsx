'use client'

import moment from 'moment'
import { useState } from 'react'

//value types
type initialDate = string

//possible errors
const error = {
    notValidDay: 'Must be a valid day',
    notValidMonth: 'Must be a valid month',
    notValidYear: 'Must be in the past',
    required: 'The field is required',
    invalidDate: 'Must be a valid date',
}

const dateCalculator: any = () => {
    //birthday
    const [dayB, setDayB] = useState<initialDate>('')
    const [monthB, setMonthB] = useState<initialDate>('')
    const [yearB, setYearB] = useState<initialDate>('')

    //dates to be shown
    const [day, setDay] = useState(0)
    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(0)

    //errors
    const [dayError, setDayError] = useState('')
    const [monthError, setMonthError] = useState('')
    const [yearError, setYearError] = useState('')

    //handlers for states
    const handlerDateB = (dayB: string) => setDayB(dayB)
    const handlerMonthB = (monthB: string) => setMonthB(monthB)
    const handlerYearB = (yearB: string) => setYearB(yearB)

    //errors handler
    const [hasErrors, setHasErrors] = useState(false)

    const onSend = () => {
        const actualDate = moment()
        const birthday = new Date()

        if (!dayB) setDayError(error.required)
        if (!monthB) setMonthError(error.required)
        if (!yearB) setYearError(error.required)
        if (!dayB || !monthB || !yearB) return

        const day = parseInt(dayB)
        const month = parseInt(monthB)
        const year = parseInt(yearB)

        let foundError = false

        if (year < new Date().getFullYear() && year > 0) {
            birthday.setFullYear(year)
            setYearError('')
        } else {
            setYearError(error.notValidYear)
            foundError = true
        }
        if (month > 0 && month < 13) {
            birthday.setMonth(month - 1)
            setMonthError('')
        } else {
            setMonthError(error.notValidMonth)
            foundError = true
        }
        if (day > 0 && day < 32) {
            birthday.setDate(day)
            setDayError('')
        } else {
            setDayError(error.notValidDay)
            foundError = true
        }
        if (
            !moment(`${monthB}/${dayB}/${yearB}`, 'MM/DD/YYYY', true).isValid()
        ) {
            setDayError(error.invalidDate)
            foundError = true
        }
        if (foundError) {
            setHasErrors(true)
            return
        } else {
            setHasErrors(false)
        }

        const differences = actualDate.diff(birthday)
        const result = {
            years: moment.duration(differences).years(),
            months: moment.duration(differences).months(),
            days: moment.duration(differences).days(),
        }
        setDay(result.days)
        setMonth(result.months)
        setYear(result.years)
    }

    return {
        //aux date for inputs
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

        //function to calculate date
        onSend,
        dayError,
        monthError,
        yearError,
        hasErrors,
    }
}

export default dateCalculator
