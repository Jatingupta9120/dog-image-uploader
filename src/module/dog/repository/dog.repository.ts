import { Injectable } from '@nestjs/common';
import { errorName } from 'src/constants/error';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { DogEntity } from '../entity/dog.entity';

@Injectable()
export class DogRepository {
    constructor() {}

    // Fetch all dog images
    async getAllDogImages() {
        return await DogEntity.findAndCountAll();
    }

    // Fetch a dog image by ID
    async getDogPicDetailsById(id: string): Promise<DogEntity> {
        const dog = await DogEntity.findOne({
            where: { id },
        });
        if (!dog) {
            throw new HttpExceptionWrapper(errorName.IMAGE_NOT_FOUND_ERROR);
        }
        return dog;
    }

    // Update dog IMAGE BY ID
    async updateDogPic(
        id: string,
        data: Partial<DogEntity>,
    ): Promise<DogEntity> {
        const [numberOfAffectedRows, [updatedDog]] = await DogEntity.update(
            data,
            {
                where: { id },
                returning: true,
            },
        );

        if (numberOfAffectedRows === 0) {
            throw new HttpExceptionWrapper(errorName.DOG_IMAGE_NOT_FOUND_ERROR);
        }

        return updatedDog;
    }

    // Delete a dog image from the database
    async deleteDogImage(id: string): Promise<void> {
        const dogImage = await this.getDogPicDetailsById(id);
        await dogImage.destroy();
    }
}
