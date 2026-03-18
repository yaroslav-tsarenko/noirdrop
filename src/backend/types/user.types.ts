import { Document, Types } from "mongoose";

export interface IUserSchema extends Document {
    _id: Types.ObjectId;
    name: string;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    phone?: string;
    street?: string;
    city?: string;
    country?: string;
    postcode?: string;
    dateOfBirth?: Date | null;
    acceptedTerms?: boolean;
    tokens: number;
    role: "user" | "admin";
    createdAt: Date;
    updatedAt: Date;
}

export interface UserType {
    _id: string;
    name: string;
    email: string;
    tokens: number;
    role: "user" | "admin";
    createdAt: Date;
    updatedAt: Date;
}
