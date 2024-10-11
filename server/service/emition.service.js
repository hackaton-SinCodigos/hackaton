import { EmitionModel } from '../models/emition.model.js';
import { MoviesModel } from '../models/movies.models.js';
import { HallModel } from '../models/hall.model.js';

export const createEmitionService = async (emitionData) => {
    const { movieId, hallId, ...emitionDetails } = emitionData;

    const emition = await EmitionModel.create({
        ...emitionDetails,
        movieId,
        hallId
    });

    return emition;
};

export const getAllEmitionsService = async () => {
    return await EmitionModel.findAll({
        include: [MoviesModel, HallModel]  // Incluyendo películas y salas relacionadas
    });
};

export const getEmitionByIdService = async (emitionId) => {
    return await EmitionModel.findByPk(emitionId, {
        include: [MoviesModel, HallModel]  // Incluyendo la película y sala relacionada
    });
};

export const updateEmitionService = async (emitionId, emitionData) => {
    const { movieId, hallId, ...emitionDetails } = emitionData;

    const [updatedRows] = await EmitionModel.update({
        ...emitionDetails,
        movieId,
        hallId
    }, {
        where: { id: emitionId }
    });

    return updatedRows;
};

export const deleteEmitionService = async (emitionId) => {
    return await EmitionModel.destroy({ where: { id: emitionId } });
};
