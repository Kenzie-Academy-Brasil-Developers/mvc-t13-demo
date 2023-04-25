import { Request, Response } from "express";
import { UserModel } from "../models/User";

export const usersControllers = {
    index: (request: Request, response: Response) => {
        const users = UserModel.getAll();

        return response.json(users);
    }, // busca de todos
    show: (request: Request, response: Response) => {
        const { id } = request.params;
        const user = UserModel.getById(id);

        if (!user) {
            return response.status(404).json({
                error: 'User not found'
            });
        }

        return response.json(user);
    }, // busca de um único
    store: (request: Request, response: Response) => {
        const user = UserModel.create(request.body);

        return response.json(user)
     }, // cadastrar
    delete: () => { },
    update: () => { }
}