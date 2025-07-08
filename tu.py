import numpy as np
import matplotlib.pyplot as plt
from astropy.time import Time
from astropy import units as u
from matplotlib.dates import DateFormatter

# ==============================
# 参数设置
# ==============================
observer_longitude = 120.0 * u.deg
target_ra = 5.5 * u.hourangle
start_date = '2023-10-01 00:00:00'
end_date = '2023-10-02 00:00:00'
num_points = 100

# ==============================
# 计算函数
# ==============================
def calculate_hour_angle(dates, observer_lon, ra):
    """计算时角随时间的变化"""
    dates_str = np.char.replace(dates.astype(str), 'T', ' ')
    times = Time(dates_str, format='iso', scale='utc')
    gst = times.sidereal_time('mean', 'greenwich')
    lst = gst + observer_lon.to(u.hourangle)
    hour_angle = lst - ra
    hour_angle = hour_angle.wrap_at(24 * u.hour)
    return hour_angle

# ==============================
# 主程序
# ==============================
if __name__ == '__main__':
    start = np.datetime64(start_date)
    end = np.datetime64(end_date)
    start_sec = (start - np.datetime64('1970-01-01T00:00:00')) / np.timedelta64(1, 's')
    end_sec = (end - np.datetime64('1970-01-01T00:00:00')) / np.timedelta64(1, 's')
    timestamps = np.linspace(start_sec, end_sec, num_points)
    dates = np.array(timestamps, dtype='datetime64[s]')
    
    hour_angle = calculate_hour_angle(dates, observer_longitude, target_ra)
    
    plt.figure(figsize=(12, 6))
    plt.plot(dates, hour_angle.to(u.hourangle).value, 
             linestyle='-', marker='o', markersize=4, 
             label=f'赤经α={target_ra.to_string(u.hourangle, sep=("h", "m"), precision=1)}')  # 关键修复
    plt.axhline(0, color='red', linestyle='--', linewidth=1, alpha=0.5, label='子午圈 (t=0)')
    plt.gca().xaxis.set_major_formatter(DateFormatter('%H:%M\n%Y-%m-%d'))
    plt.ylabel('时角 (小时)', fontsize=12)
    plt.title(f'时角随时间变化（经度λ={observer_longitude.to_string(u.deg)}）', fontsize=14)
    plt.legend()
    plt.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.show()

git push -f origin main