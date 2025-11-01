// Component Loader - Carrega componentes HTML
class ComponentLoader {
    static async loadComponent(elementId, componentPath) {
        try {
            const response = await fetch(componentPath);
            const html = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = html;
            }
        } catch (error) {
            console.error(`Erro ao carregar componente ${componentPath}:`, error);
        }
    }

    static async loadAllComponents() {
        // Carrega header e footer
        await Promise.all([
            this.loadComponent('header-placeholder', 'components/header.html'),
            this.loadComponent('footer-placeholder', 'components/footer.html')
        ]);
    }
}

// Inicializa componentes quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', async () => {
    await ComponentLoader.loadAllComponents();
});