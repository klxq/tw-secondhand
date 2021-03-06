declare namespace NodeJS {
    export interface Global {
        localStorage: Storage
        URLSearchParams: Function
    }
}

global.localStorage = {
    key: null,
    length: 0,
    getItem() { return null },
    setItem() { return null },
    removeItem() { return null },
    clear() { return null },
}

global.URLSearchParams = class URLSearchParams {
    private key: string
    private value: string

    get(key: string): string {
        return this.value
    }

    has(key: string): boolean {
        return !!this.key
    }

    append(key: string, value: string): void {
        this.key = key
        this.value = value
    }

    toString(): string {
        return `${this.key}=${this.value}`
    }
}
