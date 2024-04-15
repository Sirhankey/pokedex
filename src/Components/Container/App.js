function Container({ children }) {
    return (
        <section className="container mx-auto text-center">
            {children}
        </section>
    );
}

export default Container;