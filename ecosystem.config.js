module.exports = {
    apps: [
      {
        name: "BlogHomeNuxt",
        exec_mode: "cluster",
        instances: "2",
        script: "./.output/server/index.mjs",
        args: "", 
        watch: true, 
        ignore_watch: ["node_modules", "public", "logs"], 
        exec_mode: "fork",
        instances: "2", 
        autorestart: true, 
        max_memory_restart: "1G",
        merge_logs: true, // 设置追加日志而不是新建日志
        log_date_format: "YYYY-MM-DD HH:mm:ss", // 指定日志文件的时间格式
        min_uptime: "60s", // 应用运行少于时间被认为是异常启动
        max_restarts: 30, // 最大异常重启次数
        restart_delay: 60, // 异常重启情况下，延时重启时间
      },
    ],
  };