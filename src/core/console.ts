class ConsoleSingleton
{
    Reset       = '\x1b[0m';
    Bright      = '\x1b[1m';
    Dim         = '\x1b[2m';
    Underscore  = '\x1b[4m';
    Blink       = '\x1b[5m';
    Reverse     = '\x1b[7m';
    Hidden      = '\x1b[8m';

    FgBlack     = '\x1b[30m';
    FgRed       = '\x1b[31m';
    FgGreen     = '\x1b[32m';
    FgYellow    = '\x1b[33m';
    FgBlue      = '\x1b[34m';
    FgMagenta   = '\x1b[35m';
    FgCyan      = '\x1b[36m';
    FgWhite     = '\x1b[37m';
    FgLitGray   =  '\x1b[90m';

    BgBlack     = '\x1b[40m';
    BgRed       = '\x1b[41m';
    BgGreen     = '\x1b[42m';
    BgYellow    = '\x1b[43m';
    BgBlue      = '\x1b[44m';
    BgMagenta   = '\x1b[45m';
    BgCyan      = '\x1b[46m';
    BgWhite     = '\x1b[47m';

    log(text: string)
    {
        console.log('\x1b[37m%s\x1b[0m', text)
    }

    white(text: string)
    {
        console.log('\x1b[37m%s\x1b[0m', text)
    }

    red(text: string)
    {
        console.log('\x1b[31m%s\x1b[0m', text)
    }

    info(text: string)
    {
        this.lite(text)
    }

    warn(text: string)
    {
        console.log('\x1b[33m%s\x1b[0m', text)
    }

    magenta(text: string)
    {
        console.log('\x1b[35m%s\x1b[0m', text)
    }

    comment(text: string)
    {
        console.log('\x1b[35m%s\x1b[0m', text)
    }

    cyan(text: string)
    {
        console.log('\x1b[36m%s\x1b[0m', text)
    }

    blue(text: string, inv: boolean = false)
    {
        if (inv) {
            // inverse background and foreground
            console.log('\x1b[44m\x1b[37m%s\x1b[0m', text)
        } else {
            console.log('\x1b[44m%s\x1b[0m', text)
        }
    }

    gray(text: string)
    {
        console.log('\x1b[97m%s\x1b[0m', text)
    }

    lite(text: string)
    {
        console.log('\x1b[90m%s\x1b[0m', text)
    }

    error(text: string)
    {
        console.log('\x1b[31m%s\x1b[0m', text)
    }

    exception(error: string, exit: boolean = false)
    {
        console.log('\x1b[41m%s\x1b[0m', error)
        throw new Error(error)

        if (true === exit) {
            process.exit()
        }
    }
}

export let Console = new ConsoleSingleton()
