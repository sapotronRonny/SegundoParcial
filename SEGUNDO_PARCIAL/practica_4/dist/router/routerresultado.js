"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controladores_1 = require("../controladores");
const router = (0, express_1.Router)();
router.get('/', controladores_1.getAllRESULTADOS);
router.get('/:id', controladores_1.getresultadoById);
router.post('/', controladores_1.createResultado);
router.put('/:id', controladores_1.updateResultado);
router.delete('/:id', controladores_1.deleteResultado);
exports.default = router;