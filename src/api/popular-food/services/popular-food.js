'use strict';

/**
 * popular-food service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::popular-food.popular-food');
