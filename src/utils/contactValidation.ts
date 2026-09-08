export const normalizeName = (value: string) => {
    return value.trim().replace(/\s+/g, ' ').toLowerCase()
}

export const cleanName = (value: string) => {
    return value.trim().replace(/\s+/g, ' ')
}

export const normalizeEmail = (value: string) => {
    return value.trim().toLowerCase()
}

export const normalizePhone = (value: string) => {
    return value.replace(/\D/g, '')
}

export const formatPhone = (value: string) => {
    const digits = normalizePhone(value).slice(0, 11)

    if (digits.length === 0) {
        return ''
    }

    if (digits.length <= 2) {
        return `(${digits}`
    }

    if (digits.length <= 6) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    }

    if (digits.length <= 10) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeEmail(value))
}

export const isValidPhone = (value: string) => {
    const digits = normalizePhone(value)

    return digits.length === 10 || digits.length === 11
}

export const isValidName = (value: string) => {
    return cleanName(value).length >= 2
}