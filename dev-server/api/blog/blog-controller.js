//Task-3a
import { Blog } from './blog.js';
//End Task

//Task-2a
import dbConnection from "../../database-connection";
//End Task

//Task-2b
/**
 * Fetch all guestbook entries from the database
 * and send it to the client
 * @param req: request
 * @param res: response
 * @param next: next step
 * @returns {*}
 */
export function holeGuestbookEintraege(req, res, next) {
    //initialize an array called liste
    let liste = [];

    //define an sql-query
    const abfrage = "select * from eintrag;";
    try {
        //submit sql query stored in the string abfrage.
        dbConnection.query(abfrage, (fehler, reihen) => {
            if (fehler){
                console.error(fehler);
            }
            // iterate through all returned records stored in reihen
            for (let index in reihen){
                if (index == null){
                    throw new Error('index of getall is null')
                }
                let eintrag = reihen[index];
                liste.push({
                    "titel": "Test", //blog.titel,
                    "text": eintrag.text,
                    "autor": eintrag.autor,
                    "email": eintrag.email,
                    "datum": eintrag.datum
                })
            }
            //send to liste to the client
            return res.status(200).send(JSON.stringify(liste));
        });
    } catch (ex) {
        console.log(ex);
        next(ex);
        return res.status(500).send({message: 'index of getall is null'});
    }
}

//End Task

//Task-3b
/**
 * Main function for getting/processing post data
 * @param req
 * @param res
 * @returns {*}
 */
export async function erzeugeGuestbookEintrag(req, res, next) {
    try {
        let new_blogEntry = new Blog(
            req.body.nickname.toLowerCase(),
            req.body.title.toLowerCase(),
            req.body.content.toLowerCase()
        );

        if (new_blogEntry.nickname) {
            await database.blogentries.create(
                new_blogEntry.nickname,
                new_blogEntry.title,
                new_blogEntry.content
            );
        }
        return res.status(201).json({
            message: `blog inserted with ${new_blogEntry.title}!`
        });
    } catch (ex) {
        next(ex);
    }
}
//End Task
