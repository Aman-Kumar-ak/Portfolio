// API configuration for both development and production
const API_BASE = (() => {
	// Prefer explicit env var in all environments
	const fromEnv = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')
	if (fromEnv) return fromEnv
	// Fallbacks
	if (import.meta.env.DEV) return 'http://localhost:5000'
	return ''
})()

const api = {
	async getCategories(){ 
		try {
			const r = await fetch(`${API_BASE}/api/categories`); 
			if (!r.ok) throw new Error('Failed to fetch categories');
			return r.json(); 
		} catch (error) {
			console.error('API Error:', error);
			// Return fallback data for development
			return [
				{ slug: 'web-development', name: 'Web Development', description: 'Full-stack web applications' },
				{ slug: 'mobile-development', name: 'Mobile Development', description: 'Cross-platform mobile apps' },
				{ slug: 'ui-ux-design', name: 'UI/UX Design', description: 'User interface and experience design' }
			];
		}
	},
	
	async getCategory(slug){ 
		try {
			const r = await fetch(`${API_BASE}/api/categories/${slug}`); 
			if (!r.ok) throw new Error('Category not found');
			return r.json(); 
		} catch (error) {
			console.error('API Error:', error);
			throw new Error('Category not found');
		}
	},
	
	async getHackathons(){ 
		try {
			const r = await fetch(`${API_BASE}/api/hackathons`); 
			if (!r.ok) throw new Error('Failed to fetch hackathons');
			return r.json(); 
		} catch (error) {
			console.error('API Error:', error);
			return [];
		}
	},
	
	async getCourses(){ 
		try {
			const r = await fetch(`${API_BASE}/api/courses`); 
			if (!r.ok) throw new Error('Failed to fetch courses');
			return r.json(); 
		} catch (error) {
			console.error('API Error:', error);
			return [];
		}
	},
	
	async getCertifications(){ 
		try {
			const r = await fetch(`${API_BASE}/api/certifications`); 
			if (!r.ok) throw new Error('Failed to fetch certifications');
			return r.json(); 
		} catch (error) {
			console.error('API Error:', error);
			return [];
		}
	}
}

export default api;


