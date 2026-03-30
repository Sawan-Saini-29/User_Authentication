import SQLite from 'react-native-sqlite-storage';
import { User } from '../models/User';

export const addUser = async (
    db: SQLite.SQLiteDatabase,
    user: User,
) => {
    const result = await db.executeSql(
        'INSERT INTO users (name,email) VALUES (?,?)',
        [user.name, user.email],
    );

    const insertId = result[0].insertId;

    return insertId;
};

export const getUsers = async (
    db: SQLite.SQLiteDatabase,
): Promise<User[]> => {
    const users: User[] = [];

    const results = await db.executeSql(
        'SELECT * FROM users',
    );

    results.forEach(result => {
        for (let i = 0; i < result.rows.length; i++) {
            users.push(result.rows.item(i));
        }
    });

    return users;
};

export const deleteUser = async (
    db: SQLite.SQLiteDatabase,
    id: number,
) => {
    await db.executeSql(
        'DELETE FROM users WHERE id = ?',
        [id],
    );
};

export const checkUserExists = async (
    db: SQLite.SQLiteDatabase,
    email: string,
): Promise<boolean> => {

    const result = await db.executeSql(
        "SELECT * FROM users WHERE LOWER(email) = LOWER(?)",
        [email],
    );

    if (result[0].rows.length > 0) {
        return true;
    }

    return false;
};