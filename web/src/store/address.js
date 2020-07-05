import address_service from '../services/address.service/index';

export async function create_address(payload) {
    try {
        const address = await address_service.create_address(payload);
        return address
    } catch (err) {
        console.error(err);
    }
}

export async function update_address(payload) {
    try {
        const address = await address_service.update_address(payload);
        return address
    } catch (err) {
        console.error(err);
    }
}