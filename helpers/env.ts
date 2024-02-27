const env = (variable: string, defaultValue: any = null) => {
    return process.env['EXPO_PUBLIC_' + variable] || defaultValue;
}

export default env;
