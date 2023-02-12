function DarkTheme() {
    return ( 
        <style jsx global>{`
            :root {
                --background-color: rgba(0, 0, 0, 0.962);
                --link-color: rgba(255, 183, 0, 0.884);
                --text-color: rgba(255, 255, 255, 0.866);
            }
        `}</style>
    )
}

export default DarkTheme;