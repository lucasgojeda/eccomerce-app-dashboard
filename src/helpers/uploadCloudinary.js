


export const uploadImageToCloudinary = async (image) => { 

    const cloudUrl = 'https://api.cloudinary.com/v1_1/the-kings-company/image/upload';

    const formData = new FormData();

    formData.append('upload_preset', 'eccomerce-app')
    formData.append('file', image)

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }


}