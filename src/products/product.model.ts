import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";
import { HydratedDocument } from "mongoose";
export type ProductDocument = HydratedDocument<Product>;
@Schema()
export class Product {
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop()
    price: string
}

export const ProductSchema = SchemaFactory.createForClass(Product);