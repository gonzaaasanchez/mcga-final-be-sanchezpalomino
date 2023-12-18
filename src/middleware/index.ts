import { Request, Response, NextFunction } from 'express';
import admin from 'firebase-admin';

const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userFirebaseToken = req.headers.authorization as string | undefined;
    try {
        if (!userFirebaseToken) {
            res.status(401);
            throw new Error('Token not found');
        }
        await admin.auth().verifyIdToken(userFirebaseToken);
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token: ' + error })
    }
};

export { verifyToken } 
