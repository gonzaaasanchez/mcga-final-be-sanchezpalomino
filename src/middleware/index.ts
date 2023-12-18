import { Request, Response, NextFunction } from 'express';
import admin from 'firebase-admin';

const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userFirebaseToken = req.header('X-Firebase-Token') as string | undefined;
    try {
        if (!userFirebaseToken) {
            res.status(401);
            return next('Token not found');
        }
        await admin.auth().verifyIdToken(userFirebaseToken);
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' })
    }
};

export { verifyToken } 
