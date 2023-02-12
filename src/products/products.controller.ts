import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) { }
    @Get()
    getAllProducts() {
        return this.productService.getProdcuts().then((res) => {
            return res;
        });
    }
    @Post()
    addProduct(@Body() product: ProductDTO) {
        return this.productService.addProduct(product).then((res) => {
            return res;
        });
    }
}
