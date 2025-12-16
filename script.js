/**
 * 5. Script simple et léger pour le changement de thème (clair/sombre)
 * L'attribut 'defer' dans index.html assure que ce script est exécuté après le parsing du HTML.
 */

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const iconClair = document.querySelector('.icon-claire');
    const iconSombre = document.querySelector('.icon-sombre');
    
    // Clé pour le stockage local
    const THEME_KEY = 'cvTheme';

    /**
     * Charge le thème sauvegardé ou le thème système par défaut.
     */
    const loadTheme = () => {
        const savedTheme = localStorage.getItem(THEME_KEY);
        
        // 1. Priorité au choix utilisateur
        if (savedTheme) {
            body.className = savedTheme;
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // 2. Fallback au thème sombre si l'OS le préfère
            body.className = 'theme-sombre';
        } else {
            // 3. Sinon, thème clair par défaut
            body.className = 'theme-claire';
        }
        
        updateButtonIcons(body.className);
    };

    /**
     * Met à jour les icônes du bouton en fonction du thème actif.
     * @param {string} currentTheme - Le nom de la classe du thème ('theme-claire' ou 'theme-sombre').
     */
    const updateButtonIcons = (currentTheme) => {
        if (currentTheme === 'theme-sombre') {
            iconClair.style.display = 'none';
            iconSombre.style.display = 'inline';
            toggleButton.setAttribute('aria-label', 'Passer au mode clair');
        } else {
            iconClair.style.display = 'inline';
            iconSombre.style.display = 'none';
            toggleButton.setAttribute('aria-label', 'Passer au mode sombre');
        }
    };

    /**
     * Bascule entre le thème clair et sombre.
     */
    const toggleTheme = () => {
        const isDark = body.classList.contains('theme-sombre');
        
        // Nouveau thème
        const newTheme = isDark ? 'theme-claire' : 'theme-sombre';
        
        // Mise à jour du body et du stockage
        body.className = newTheme;
        localStorage.setItem(THEME_KEY, newTheme);
        
        updateButtonIcons(newTheme);
    };

    // Écouteur d'événement sur le bouton
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleTheme);
    }
    
    // Chargement du thème au démarrage
    loadTheme();
});