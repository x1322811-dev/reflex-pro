import { AiFeedback } from "../types";

// 基于平均反应时间返回不同级别的评价
export const analyzePerformance = async (times: number[]): Promise<AiFeedback> => {
  const average = Math.round(times.reduce((a, b) => a + b, 0) / times.length);
  
  // 根据平均反应时间提供固定的段位、评价和建议
  if (average < 250) {
    // 顶级反应速度
    return {
      rank: "夯",
      comment: "惊人的反应速度！你是反应测试的王者，毫秒级的反应让你脱颖而出。",
      tips: "你的反应已经非常出色，继续保持训练可以进一步提高稳定性。"
    };
  } else if (average < 280) {
    // 优秀反应速度
    return {
      rank: "顶尖",
      comment: "出色的表现！你的反应时间远高于人类平均水平，展现了惊人的专注力。",
      tips: "尝试在不同环境下练习，提高在各种条件下的反应能力。"
    };
  } else if (average < 300) {
    // 良好反应速度
    return {
      rank: "人上人",
      comment: "很好的表现！你的反应速度处于良好水平，已经超过了大多数人。",
      tips: "注意放松心情，过度紧张会影响反应速度。试着在游戏开始前做几次深呼吸。"
    };
  } else if (average < 350) {
    // 普通反应速度
    return {
      rank: "NPC",
      comment: "还不错的表现！你的反应速度处于平均水平，可以通过练习进一步提升。",
      tips: "练习时可以尝试专注于特定的视觉线索，忽略其他干扰因素。"
    };
  } else {
    // 较慢反应速度
    return {
      rank: "拉完了",
      comment: "刚开始练习吧！不要担心，反应速度是可以通过训练提升的。",
      tips: "每天花几分钟时间练习，坚持下去会看到明显的进步。保持规律训练是关键。"
    };
  }
};