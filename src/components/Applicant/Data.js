

export const ApplicantData = () => {

    const getMenuItems = () => {
        return [
            {
                icon: `<span class="material-symbols-outlined">person</span>`,
                name: 'Profile'
            },
            {
                icon: '<span class="material-symbols-outlined">work</span>',
                name: 'Jobs'
            },
            {
                icon: '<span class="material-symbols-outlined">update</span>',
                name: 'Update'
            },
            {
                icon: '<span class="material-symbols-outlined">school</span>',
                name: 'Qualifications'
            },
            {
                icon: '<span class="material-symbols-outlined">diversity_3</span>',
                name: 'Experience'
            }
        ]
    }

    return { getMenuItems }
}