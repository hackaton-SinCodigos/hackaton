import {
  createEmitionService,
  getAllEmitionsService,
  getEmitionByIdService,
  updateEmitionService,
  deleteEmitionService
} from '../service/emition.service.js';

export const createEmitionController = async (req, res) => {
  try {
      const newEmition = await createEmitionService(req.body);
      res.status(201).json(newEmition);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

export const getAllEmitionsController = async (req, res) => {
  try {
      const emitions = await getAllEmitionsService();
      res.status(200).json(emitions);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

export const getEmitionByIdController = async (req, res) => {
  try {
      const emition = await getEmitionByIdService(req.params.id);
      if (!emition) {
          return res.status(404).json({ message: 'Emisión no encontrada' });
      }
      res.status(200).json(emition);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

export const updateEmitionController = async (req, res) => {
  try {
      const updatedRows = await updateEmitionService(req.params.id, req.body);
      if (updatedRows === 0) {
          return res.status(404).json({ message: 'Emisión no encontrada o no actualizada' });
      }
      res.status(200).json({ message: 'Emisión actualizada correctamente' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

export const deleteEmitionController = async (req, res) => {
  try {
      const deletedRows = await deleteEmitionService(req.params.id);
      if (deletedRows === 0) {
          return res.status(404).json({ message: 'Emisión no encontrada' });
      }
      res.status(200).json({ message: 'Emisión eliminada correctamente' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};
