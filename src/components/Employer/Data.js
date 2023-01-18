

export const EmployerData = () => {

    const getMenuItems = () => {
        return [
            {
                icon: `<span class="material-symbols-outlined">person</span>`,
                name: 'Profile',
                isActive: true
            },
            {
                icon: '<span class="material-symbols-outlined">work</span>',
                name: 'My Jobs',
                isActive: false
            },
            {
                icon: '<span class="material-symbols-outlined">work</span>',
                name: 'Job Applications',
                isActive: false
            },
            {
                icon: '<span class="material-symbols-outlined">update</span>',
                name: 'Update Profile',
                isActive: false
            },
            {
                icon: '<span class="material-symbols-outlined">work</span>',
                name: 'Post Job',
                isActive: false
            },
            // {
            //     icon: '<span class="material-symbols-outlined">diversity_3</span>',
            //     name: 'Experience',
            //     isActive: false
            // }
        ]
    }

    return { getMenuItems }
}