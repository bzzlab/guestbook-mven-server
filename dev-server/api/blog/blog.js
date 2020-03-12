class Blog {
    get email() {
        return this._email;
    }
    get autor() {
        return this._autor;
    }
    get text() {
        return this._text;
    }
    get titel() {
        return this._titel;
    }


    /**
     * Constructor for this object
     * @param titel
     * @param text
     * @param autor
     * @param email
     * @param datum
     */
    constructor(titel, text, autor, email, datum){
        this._titel = titel;
        this._text = text;
        this._autor = autor;
        this._email = email;
    }
};

//Alternative way to export a module
export { Blog }
