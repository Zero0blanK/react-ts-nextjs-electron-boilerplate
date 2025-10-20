const API = window.electronAPI;

const getManga = async () => {
  try {
    const manga = await API.invoke("getManga");
    return manga;
  } catch (error) {
    console.error("Error fetching manga:", error);
    throw error;
  }
};

const renderer = {
  getManga,
};

export default renderer;