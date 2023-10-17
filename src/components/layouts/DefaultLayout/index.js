import Header from "./Header";

function DefaultLayout({chiildren}) {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="content">
                    {chiildren}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;