const DashboardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="bg-[#000319] min-h-screen dark:bg-grid-white/[0.03]">
            {children}
        </div>
    );
};

export default DashboardLayout;