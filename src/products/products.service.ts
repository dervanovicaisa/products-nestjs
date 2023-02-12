import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.model';
import { ProductDTO } from './dto/product.dto';
@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }
    getProdcuts(): Promise<Product[]> {
        return this.productModel.find().exec();
    }
    async addProduct(product: ProductDTO): Promise<Product> {
        const productDto = new this.productModel(product);
        return productDto.save();
    }
}
