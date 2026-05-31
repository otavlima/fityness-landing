const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col h-screen w-screen">{children}</div>
}

export default Container