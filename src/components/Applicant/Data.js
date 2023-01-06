

export const ApplicantData = () => {

    const getMenuItems = () => {
        return [
            {
                icon: `<span class="material-symbols-outlined">person</span>`,
                name: 'Profile',
                isActive: true
            },
            {
                icon: '<span class="material-symbols-outlined">work</span>',
                name: 'Jobs',
                isActive: false
            },
            {
                icon: '<span class="material-symbols-outlined">update</span>',
                name: 'Update',
                isActive: false
            },
            {
                icon: '<span class="material-symbols-outlined">school</span>',
                name: 'Qualifications',
                isActive: false
            },
            {
                icon: '<span class="material-symbols-outlined">diversity_3</span>',
                name: 'Experience',
                isActive: false
            }
        ]
    }

    return { getMenuItems }
}