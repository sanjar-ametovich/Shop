export function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}
export function setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
 }

 export class Admin {
    saveAdminsToLocalStorage(admins){
        localStorage.setItem('admins', JSON.stringify(admins));
    }
    adminsFromLocalStorage() {
        let admins = JSON.parse(localStorage.getItem('admins') || '[]');
        return admins;
    }
}
export class Products {
    saveProductToLocalStorage(product){
        localStorage.setItem('product', JSON.stringify(product));
    }
    productFromLocalStorage() {
        let product = JSON.parse(localStorage.getItem('product') || '[]');
        return product;
    }
}
export function clearData(key) {
    localStorage.removeItem(key);
 }
